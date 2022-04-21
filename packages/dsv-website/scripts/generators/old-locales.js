/**
 * 基于config 生成 routes
 */
const path = require('path');
const fs = require('fs');

const languages = ['zh-CN', 'en-US'];

function createLocale(entry, key, locales) {
  fs.readdirSync(entry).forEach((item) => {
    const location = path.join(entry, item);
    const info = fs.statSync(location);

    if (info.isDirectory()) {
      return createLocale(location, `${key}_${item}`, locales);
    }
    const method = require(location);
    const result = {
      key: `${key}_${item.replace('.js', '')}`,
    };
    languages.forEach((v) => {
      result[v] = method[v];
    });
    locales.push(result);
  });
}

function createFile(path, content) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
  fs.writeFile(path + '/index.ts', content, function (error) {
    if (error) {
      console.log('Error: generators locales');
    }
  });
}

function run(folderName) {
  const locales = [];

  createLocale(
    path.resolve(__dirname, `../../src/config${folderName}`),
    folderName.slice(1).replace('-', '_'),
    locales,
  );
  createFile(
    path.resolve(__dirname, `../../src/locales${folderName}`),
    `export default ${JSON.stringify(locales, undefined, 2)}`,
  );

  console.log(`Successful: generators locales ${folderName}`);
}

run('/data-structure');
run('/gallery');
run('/api');
