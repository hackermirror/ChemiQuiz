const fs = require('fs');
const path = require('path');
const { minify } = require('terser');
const CleanCSS = require('clean-css');
const { minify: minifyHtml } = require('html-minifier-terser');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');

function rmrf(target) {
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
  }
}

function mkdirp(target) {
  fs.mkdirSync(target, { recursive: true });
}

function copyFile(src, dest) {
  mkdirp(path.dirname(dest));
  fs.copyFileSync(src, dest);
}

function copyDir(src, dest) {
  mkdirp(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFile(srcPath, destPath);
    }
  }
}

async function buildJs() {
  const srcDir = path.join(root, 'assets', 'js');
  const destDir = path.join(dist, 'assets', 'js');
  mkdirp(destDir);

  for (const file of fs.readdirSync(srcDir)) {
    if (!file.endsWith('.js')) continue;
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(
      destDir,
      file.endsWith('.min.js') ? file : file.replace(/\.js$/, '.min.js')
    );
    const code = fs.readFileSync(srcPath, 'utf8');
    const result = await minify(code, {
      compress: true,
      mangle: true,
      format: { comments: false }
    });
    fs.writeFileSync(destPath, result.code, 'utf8');
  }
}

function buildCss() {
  const srcDir = path.join(root, 'assets', 'css');
  const destDir = path.join(dist, 'assets', 'css');
  mkdirp(destDir);

  for (const file of fs.readdirSync(srcDir)) {
    if (!file.endsWith('.css')) continue;
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(
      destDir,
      file.endsWith('.min.css') ? file : file.replace(/\.css$/, '.min.css')
    );
    const css = fs.readFileSync(srcPath, 'utf8');
    const result = new CleanCSS({ level: 2 }).minify(css);
    if (result.errors && result.errors.length) {
      throw new Error(result.errors.join('\n'));
    }
    fs.writeFileSync(destPath, result.styles, 'utf8');
  }
}

async function buildHtmlFile(srcRel) {
  const srcPath = path.join(root, srcRel);
  const destPath = path.join(dist, srcRel);
  let html = fs.readFileSync(srcPath, 'utf8');

  html = html.replace(/assets\/css\/([\w.-]+?)(\.min)?\.css/g, function (_, name) {
    return 'assets/css/' + name + '.min.css';
  });
  html = html.replace(/\.\.\/assets\/css\/([\w.-]+?)(\.min)?\.css/g, function (_, name) {
    return '../assets/css/' + name + '.min.css';
  });
  html = html.replace(/assets\/js\/([\w.-]+?)(\.min)?\.js/g, function (_, name) {
    return 'assets/js/' + name + '.min.js';
  });
  html = html.replace(/\.\.\/assets\/js\/([\w.-]+?)(\.min)?\.js/g, function (_, name) {
    return '../assets/js/' + name + '.min.js';
  });

  const minified = await minifyHtml(html, {
    collapseWhitespace: true,
    removeComments: true,
    keepClosingSlash: true,
    minifyCSS: false,
    minifyJS: false
  });

  mkdirp(path.dirname(destPath));
  fs.writeFileSync(destPath, minified, 'utf8');
}

async function main() {
  rmrf(dist);
  mkdirp(dist);

  const staticDirs = [
    'ImatgesDeFons',
    'info/images',
    'memoria-imatges/images'
  ];

  for (const dir of staticDirs) {
    copyDir(path.join(root, dir), path.join(dist, dir));
  }

  await buildJs();
  buildCss();

  const htmlFiles = [
    'index.html',
    'info/index.html',
    'jocs/index.html',
    'memoria/index.html',
    'memoria-imatges/index.html',
    'omplir-buits/index.html',
    'proves-rapides/index.html',
    'questionaris/index.html',
    'veritat-o-fals/index.html'
  ];

  for (const file of htmlFiles) {
    await buildHtmlFile(file);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
