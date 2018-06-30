var MongoClient=require('mongodb').MongoClient;
var findQuery={"_id":1};
MongoClient.connect('mongodb://127.0.0.1:27017/test',function(err,db)
{
if(err)
{
    console.log(err);
}
else
{
  
  var resultSet= db.collection('rect').remove(findQuery,function(err,result)
   {
       if(err)throw err;
       else{
       console.log("deleted succesfully");
       }
       db.close();
   });
   

}});


function calcArea(l,b)
{     var res=l*b
    return res;
    console.log(res);
}