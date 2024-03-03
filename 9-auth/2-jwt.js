const jwt = require('jsonwebtoken');

const secret = 'sdjfowejfsdkfjlwejfioefjoi';
const token = jwt.sign({
  id: 'jhlee',
  isAdmin: false,
},
  secret,
  { expiresIn: 2 });

setTimeout(() => {
  jwt.verify(token, secret, (error, decoded) => {
    console.log(error, decoded);
  });
}, 3000)


console.log(token);