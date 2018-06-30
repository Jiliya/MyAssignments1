var http=require("http");
var data=require("./inventory.json");
http.createServer(function(req,res)
{
   if(req.url==="/") 
   res.end(JSON.stringify(data));
   else if(req.url==="/instock")
   {
       listInstock(res);
   }
   else if(req.url==="/onorder")
   {
       listOnBackOrder(res);
   }
   else
   {
       res.end("404 error...data not found");

   }
}).listen(3000);
console.log("server listening to this port 3000");
