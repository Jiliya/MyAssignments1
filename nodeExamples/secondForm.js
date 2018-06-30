var http=require("http");
var fs=require("fs");
var querystring=require("querystring");
http.createServer(function(req,res)
{
    console.log(req.method);
    if(req.method=="GET")
    {
        res.writeHead(200,{"content-type":"text/html"})
        fs.createReadStream("./form.html").pipe(res);
    }else if(req.method=="POST")
        {
            var body="";
            req.on("data",function(chunk)
        {
            body+=chunk;

        });
        req.on("end",function()
    {
        var obj=querystring.parse(body);
        console.log(obj);
        var objString=JSON.stringify(obj);
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
            <title>form results<title> </head>
            <body>
            <h1>form results</h1>
           <p> ${objString}</p>
            </body>
            </html>`);

       // res.end(`data entered in form=>${body}`);

    });

       
    }

}).listen(3000);
console.log("server listening on port 3000");