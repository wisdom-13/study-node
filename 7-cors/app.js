import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';


const app = express();

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'OPTIONS, GET, POST, PUP, DELETE',
//   );
//   next();
// })

const corsOption = {
  origin: ['http://127.0.0.1:5500'],
  optionsSuccessStatus: 200,
  credentials: true, // Access-Control-Allow-Credentials: true
}

app.use(express.json());
app.use(cookieParser());
app.use(morgan('combined')); // 로그 출력
app.use(cors(corsOption)); // CORS 설정
app.use(helmet()); // 보안 관련 header 

app.get('/', (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  console.log(req.cookies.yummy_cookie);
  res.send('Welcom!');
})

app.listen(8080)