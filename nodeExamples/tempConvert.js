var http=require("http");

http.createServer(function(req,res)
{
   if(req.url=="/faren/cel") 
   {
   var result =  cToF(32);
    res.write(result.toString());
    res.end();
   
   }
   else if(req.url=="/cel/faren")
   {
    var result=fToC(89);
    res.write(result.toString());
    res.end();
   }
   
   else
   {
       res.end("404 error...data not found");

   }
}).listen(3000);
console.log("server listening to this port 3000");



function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
  return message
 

    
}


function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
  return message
  //console.log(message);
  
}