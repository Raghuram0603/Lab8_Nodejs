var events=require('events')
var eventEmitter=new events.EventEmitter();

var square = function(num){
    console.log("This is to calculate squares",num*num);
}
var cube = function(){
    console.log("This is to calculate cubes");
}

eventEmitter.on('square',()=>{
    square(10)
})
eventEmitter.on('cube',cube)

eventEmitter.emit('cube')
eventEmitter.emit('square')