const fs = require('fs');

// X
const beforMem = process.memoryUsage().rss;
fs.readFile('./file.txt', (_, data) => {
  fs.writeFile('./file2.txt', data, () => { })
  // calculate
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}MB`)
})