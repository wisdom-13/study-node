import express from 'express';

const app = express();

app.get('/sky/:id', (req, res, next) => {
  console.log(req.params);
  console.log(req.params.id);
  console.log(req.query);
  console.log(req.query.keyword);


  res.send('hi');
})

app.listen(8080);