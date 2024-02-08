const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log('first callback -', args);
}

emitter.on('jihye', callback1)

emitter.on('jihye', (args) => {
  console.log('secound callback -', args);
})

emitter.emit('jihye', { message: 1 });
emitter.emit('jihye', { message: 2 });
emitter.removeListener('jihye', callback1);
emitter.emit('jihye', { message: 3 });