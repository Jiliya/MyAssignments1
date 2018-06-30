var MongoClient=require('mongodb').MongoClient;
var findQuery={ name: 'neethu'};
MongoClient.connect('mongodb://127.0.0.1:27017/traial',function(err,db)
{
if(err)
{
    console.log(err);
}
else
{
  
   db.collection('new123').find({},{name:1,age:1}).sort({age:1}).toArray(function(err,result)
   {
       if(err)throw err;
       console.log(result);
   })
   
db.close();
}});