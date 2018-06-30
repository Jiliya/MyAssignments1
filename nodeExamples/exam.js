var http=require("http");
var fs=require("fs");
var qs=require("querystring");
var net=require("./netPay");
var MongoClient=require('mongodb').MongoClient;
//var fh=require("./fto.js");
    http.createServer(function(req,res){
    console.log(req.method)
     if(req.method=="GET") {
       
     
       res.end(` <!DOCTYPE html>
        <html>
        <head>
        <title>employee details form</title>
        </head>
        <body>
            <h1>employee details form</h1>
            <form action="/" method="post">
                <label>employee Id</label>
                <input type="text" id="eid" name="eid"
                placeholder="eid" required/>        
                <label>employee name</label>
                <input type="text" id="ename" name="ename"
                placeholder="ename" required />
                <label>basic pay</label>
                <input type="text" id="bpay" name="bpay"
                placeholder="bpay" required />

                <button>Send</button>
            </form>
        </body>
        </html>
        `);
    } 
  
   
     else if(req.method=="POST"){
        
    
        var body="";
        req.on("data",function(chunk){
            body+=chunk;
            console.log("data");
        });
        req.on("end",function()
        {
            var obj=qs.parse(body);
            console.log(obj.eid);
            console.log(obj.ename);
             var eid1=parseFloat(obj.eid);
             var ename1=obj.ename;
             var bapy1=parseFloat(obj.bpay);

             //var cel=(5/9)*(fahren-32.0);
             // obj. celcius=$cel.toString()
            //res.end("Fahren="+ fahren.toString() +
           // "celsius="+cel.toString());

         res.end(`<!DOCTYPE html>
                 <html>
                 <head>
                 <title>Fill out this form</title>
                 </head>
                 <body>
                     <h1>fill out this form</h1>
                     <form action="/" method="post">
                         <label>id</label>
                         <input type="text" id="id" name="id"
                         placeholder="${eid1}"required/>        
                         <label>ename</label>
                         <input type="text" id="ename" name="ename1"
           
                          value="${ename1}" required readonly/>
                          <label>basic pay</label>
                          <input type="text" id="ename" name="ename1"
           
                          value="${bapy1}" required readonly/>
                     </form>
                 </body>
                 </html>
                 `);
                     MongoClient.connect('mongodb://127.0.0.1:27017/nodexam',function(err,db){
        if(err){
       
            console.log(err);
           }
        else{
       
             db.collection('nodxam').insert({"_id":eid1
              ,"employee name":ename1,"bpay":bapy1},function(err, result){
             if(err) throw err;
         
           })
        }
            
     db.close();
    });
              
          }); 
          }

        }).listen(3000);

        console.log("Form server listening on port 3000");
