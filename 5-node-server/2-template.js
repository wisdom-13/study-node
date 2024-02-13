const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const name = 'Jihye';
const coures = [{ name: 'HTML' }, { name: 'React' }, { name: 'Typescript' }]

const server = http.createServer((req, res) => {

  const url = req.url;

  res.setHeader('Content-Type', 'text/html');

  if (url === '/') {
    ejs.renderFile('./template/index.ejs', { name }).then(data => res.end(data))

  } else if (url === '/coures') {
    ejs.renderFile('./template/coures.ejs', { coures }).then(data => res.end(data))

  } else {
    ejs.renderFile('./template/not-found.ejs', { name }).then(data => res.end(data))
  }

})

server.listen(8080)