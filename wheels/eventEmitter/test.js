const EventEmitter = require('./index.min.js');

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

emitter.off('click', logdata);

emitter.emit('click'); // 'hello'

emitter.allOff();

emitter.emit('click'); // 'there is no event named : click'
