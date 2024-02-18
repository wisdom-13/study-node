import express from 'express';

const app = express();

// request와 response
app.get('/sky/:id', (req, res, next) => {
  console.log(req.params);
  console.log(req.params.id);
  console.log(req.query);
  console.log(req.query.keyword);

  res.setHeader('key', 'value');
  // res.json({ name: 'jihye' });
  res.status(201).send('created');
})

// all과 use의 차이점
app.all('/api/*', (req, res, next) => {
  console.log('all');
  next();
})

app.use('/api2', (req, res, next) => {
  console.log('use');
  next();
})


// 미들웨어의 특징
app.get('/', (req, res, next) => {
  console.log('first');
  if (true) {
    return res.send('jihye')
  }
  res.send('Hi')
}, (req, res, next) => {
  console.log('first2');
  next(new Error('error'));
})

app.get('/', (req, res, next) => {
  console.log('second');
})

// app.use((req, res, next) => {
//   res.status(404).send('Not Found');
// })

// app.use((error, req, res, next) => {
//   console.error(error);
//   res.status(500).send('Error')
// })


// post 처리하기
app.use(express.json());
app.post('/post', (req, res, next) => {
  console.log(req.body);
})


app.listen(8080);