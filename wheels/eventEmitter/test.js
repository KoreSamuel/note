const EventEmitter = require('./index.js');

const emitter = new EventEmitter();

const logonce = () => {
    console.log('log once')
}
const logdata = data => {
    console.log(data)
}
emitter.once('oncelog', logonce);
emitter.on('click', logdata);
emitter.on('click', () => {
    console.log('hello');
});

emitter.emit('oncelog'); // 'log once'
emitter.emit('click', ['I am clicked!']); // 'I am clicked!' 'hello'