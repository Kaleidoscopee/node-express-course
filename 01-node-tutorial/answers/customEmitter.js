const EventEmitter = require('events')

const emitter = new EventEmitter()

setInterval(() => {  
    emitter.emit("timer", "hi there");  
  }, 2000);  
  emitter.on("timer", (msg) => console.log(msg));  

  setImmediate(()=> {
    emitter.emit('immediate', "Hello, this is an immediate emitter.");
    
  }) 
  emitter.on('immediate', (output) => console.log(output));