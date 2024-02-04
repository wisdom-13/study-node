const fs = require('fs').promises;

// reading a file
fs.readFile('./text.txt', 'utf-8')
  .then((data) => console.log(data))
  .catch(console.error);

// writing a file
fs.writeFile('./file.txt', 'Hello, jihye')
  .catch(console.error)

fs.appendFile('./file.txt', 'Hello, jihye!!!')
  .catch(console.error)

// copy
fs.copyFile('./file.txt', './file2.txt')
  .catch(console.error)

// folder 
fs.mkdir('sub-folder')
  .catch(console.error)

fs.readdir('./')
  .then(console.log)
  .catch(console.error)