var MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/test',function(err,db)
{
if(err)
{
    console.log(err);
}
else
{
    var findQuery={ '_id' : "1"};
  db.collection('rect').findone(findQuery).toArray(function(err,result)
   {
       if(err)throw err;
       else
       {
           console.log("documents " + result)
        
           //console.log("after find -> length = " + result.length)
        calcArea(result.length,result.breadth)
       }
       
   })
   
db.close();
}});
function calcArea(l,b)
{   var res=parseInt(l)*parseInt(b);
   // return res;
   console.log("inside function");

   console.log("length =" + l)
    console.log(res);
}