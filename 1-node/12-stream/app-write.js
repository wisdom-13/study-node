const fs = require('fs');

const writeStream = fs.createWriteStream('./file3.txt');
writeStream.on('finish', () => {
  console.log('finish!');
});

writeStream.write('hello!');
writeStream.write('word!');
writeStream.end();