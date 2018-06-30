 var fs=require("fs");
 var data='mean mern stack training';
 var writerStream=fs.createWriteStream('input.txt');
 writerStream.write(data);
 writerStream.end();
 writerStream.on('finish',function()
{
    console.log("write completed");
});
writerStream.on('error',function(err){
console.log(err.stack);
});

console.log("program ended");