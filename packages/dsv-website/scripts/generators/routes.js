/**
 * 基于config 生成 routes & locales
 */
const path = require('path');
const fs = require('fs');

function createRoute(entry, key, linkPath) {
  return fs.readdirSync(entry).map((item) => {
    const location = path.join(entry, item);
    const info = fs.statSync(location);
    if (item.includes('.js')) {
      item = item.replace('.js', '');
    }

    if (info.isDirectory()) {
      return {
        key: key + item,
        children: createRoute(
          location,
          `${key + item}_`,
          `${linkPath}/${item}`,
        ),
      };
    }

    return {
      path: `${linkPath}_${item}`,
      key: key + item,
    };
  });
}

function createFile(path, content) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
  fs.writeFile(path + '/index.ts', content, function (error) {
    if (error) {
      console.log('写入失败');
    } else {
      console.log('写入成功了');
    }
  });
}

function run(folderName, fileName) {
  const result = createRoute(
    path.resolve(__dirname, `../../src/config${folderName}`),
    '',
    `${folderName}`,
  );

  createFile(
    path.resolve(__dirname, `../../src/routes${folderName}`),
    `import { IMenu } from '@dsv-website/typings/IMenu';\n\nexport const ${fileName} : IMenu =  ${JSON.stringify(
      result,
      undefined,
      2,
    )}`,
  );
}
run('/data-structure', 'dataStructureMenu');
run('/gallery', 'galleryMenu');
