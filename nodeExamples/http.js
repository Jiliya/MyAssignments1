var  http=require('http');
var serer=http.createServer(function(request,response)
{
  
  console.log(request.method);
   if(request.url=='/hai')
   {
    console.log('req strting');
    response.write('hello im in hai');
    response.end();
   }
 if(request.url=='/helo')
   {
    response.write(JSON.stringify({uname:"dsd0",age:19}));
    response.end();
   }
});

serer.listen(3000);
console.log('server running /http://172.29.122.110:3000');