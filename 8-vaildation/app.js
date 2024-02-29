import express from 'express';
import { body, param, validationResult } from 'express-validator';

const app = express();
app.use(express.json());

app.post('/users',
  body('name').isLength({ min: 2 }).withMessage('2자 이상 입력하세요.'),
  body('age').isInt().withMessage('숫자를 입력해주세요.'),
  body('email').isEmail().withMessage('이메일을 입력해주세요.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() })
    }
    console.log(req.body);
    res.sendStatus(201);
  })

app.get('/:email',
  param('email').isEmail().withMessage('이메일을 입력해주세요.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() })
    }
    res.send('SEND');
  })

app.listen(8080);