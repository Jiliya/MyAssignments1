var fs=require('events');
var data=new fs.EventEmitter();
data.on('sayHi',function(){
    console.log("hi..");
});
data.on('sayHello',function()
{
    console.log('heloo');
});
console.log("before sayHi");
data.emit('sayHi');
console.log("after sayHi");
console.log("before sayHello");
data.emit('sayHello');
console.log('the end');
