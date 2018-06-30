var http=require("http");
var data=require("./temp.js");
http.createServer(function(req,res)
{
   if(req.url=="/rectangle/area") 
   { 
   var result =  data.area(10,20);
    res.write("area is "+result.toString());
    res.end();
   
   }
   else if(req.url=="/rectangle/perimeter")
   {
    
    var result=data.perimeter(10,20);
    res.write("perimeter is "+result.toString());
    res.end();
   }
   
   else
   {
       res.end("404 error...data not found");

   }
}).listen(3000);
console.log("server listening to this port 3000");











