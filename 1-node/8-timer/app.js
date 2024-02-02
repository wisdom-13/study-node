let num = 1;

const intervbal = setInterval(() => {
  console.log(num++);
}, 1000)

setTimeout(() => {
  console.log('Timeout!');
  clearInterval(intervbal)
}, 6000)