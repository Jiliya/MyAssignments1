var MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/test',function(err,db)
{
if(err)
{
    console.log(err);
}
else
{
    var findQuery={"_id" : 1
};
   db.collection('rect').find(findQuery).toArray(function(err,result)
   {
       if(err)throw err;
       console.log(result);
   })
   
db.close();
}});