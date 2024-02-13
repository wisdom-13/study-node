const http = require('http');

const coures = [{ name: 'HTML' }, { name: 'React' }, { name: 'Typescript' }];

const server = http.createServer((req, res) => {
  const url = req.url; // what? 
  const method = req.method; // how?, action?

  if (url === '/coures') {
    if (method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(coures));
    } else if (method === 'POST') {
      const body = [];
      req.on('data', chunk => {
        console.log(chunk);
        body.push(chunk);
      })

      req.on('end', () => {
        const bodyStr = Buffer.concat(body).toString();
        const coure = JSON.parse(bodyStr);
        coures.push(coure);

        console.log(coure);
        res.writeHead(201);
        res.end();
      })
    }
  }


})

server.listen(8080)