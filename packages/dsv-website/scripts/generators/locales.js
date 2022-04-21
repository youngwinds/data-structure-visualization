const path = require('path');
const fs = require('fs');

function generateLocales(path) {
  fs.access(path, fs.constants.R_OK | fs.constants.W_OK, (err) => {
    console.log('\x1b[35m%s\x1b[0m', 'Start GenerateLocales');

    if (err) {
      throw err;
    }
  });
}

const rootPath = path.join(__dirname, '../../public/docs');

generateLocales(rootPath);
