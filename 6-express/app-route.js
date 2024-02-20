import express from 'express';
import postRouter from './router/post.js';
import userRouter from './router/post.js';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use('/posts', postRouter);
app.use('/users', userRouter);


app.listen(8080);