var http=require("http");
var data=require("./conversion.js");
http.createServer(function(req,res)
{
   if(req.url=="/faren/cel") 
   {
   var result =  data.cToF(32);
    res.write(result.toString());
    res.end();
   
   }
   else if(req.url=="/cel/faren")
   {
    var result=data.fToC(89);
    res.write(result.toString());
    res.end();
   }
   
   else
   {
       res.end("404 error...data not found");

   }
}).listen(3000);
console.log("server listening to this port 3000");




