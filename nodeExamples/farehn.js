var http=require("http");
var fs=require("fs");
var qs=require("querystring");

http.createServer(function(req,res)
{
    if(req.method=="GET")
    {
        res.end(`<!DOCTYPE html>
        <html>
        <head>
        <title>
        tempurature conversion
        </title>
        </head>
        <body>
        <form action="/" method="post">
        <label>farehn</label>
        <input type="text" id="farehn" name="farehn"  placeholder="temp" required/>
        <button> send</button>
        </form>
        </html>
        `);
    }
    else if(req.method=="post")
    {
        var body="";
        req.on("data",function(chunk)
    {
        body+=chunk;
        console.log("data");

    });
    req.on("end",function()
    {
    var obj=qs.parse(body);
    console.log(obj.farehn);
    var fahren=parseFloat(obj.farehn);
    var cel=(5/9)*(farehn-32.0);
   
    res.end("farehn="+fahren.toString()+"celcius+"+cel.toString());
   });

    }
    }
).listen(3000);
console.log("server listern in port 3000");