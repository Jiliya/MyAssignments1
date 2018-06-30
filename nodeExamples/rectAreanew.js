var http=require("http");

http.createServer(function(req,res)
{
   if(req.url=="/rectangle/area") 
   {
   var result =  area(10,20);
    res.write("area is "+result.toString());
    res.end();
   
   }
   else if(req.url=="/rectangle/perimeter")
   {
    var result=perimeter(10,20);
    res.write("perimeter is "+result.toString());
    res.end();
   }
   
   else
   {
       res.end("404 error...data not found");

   }
}).listen(3000);
console.log("server listening to this port 3000");



function area(length,breadth) 
{

  return length*breadth
 
}


function perimeter(length,breadth) 
{
  return 2*(length+breadth)
  //console.log(message);
  
}