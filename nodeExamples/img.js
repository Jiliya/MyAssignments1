var  http=require('http');
var fs=require("fs");
var path=require("path");
var sevrer=http.createServer(function(request,response)
{
  
  console.log('${req.method} req for ${req.url}');
   if(request.url.match('input.txt'))
   {
    var cssPath=path.join(__dirname,request.url);
    var fileStream=fs.createReadStream(cssPath);
    fileStream.pipe(response);
   //response.write('hello im in hai');
   // response.end();
   }
else  if(request.url.match('img1.jpg'))
   {
    var imgPath=path.join(__dirname,request.url);
    var fileStream=fs.createReadStream(imgPath);
    fileStream.pipe(response);
   }
   else{
      response.end("404 file not found");
   }
});

sevrer.listen(3000);
console.log('server running /http://172.29.122.110:3000');