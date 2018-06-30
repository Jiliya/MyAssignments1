var MongoClient=require('mongodb').MongoClient;
var findQuery={_id:'19',name:'neethuu',age:20,bpay:96320};
MongoClient.connect('mongodb://127.0.0.1:27017/test',function(err,db)
{
if(err)
{
    console.log(err);
}
else
{
  
  var resultSet= db.collection('new123').insert(findQuery,function(err,result)
   {
       if(err)throw err;
       else{
       console.log("inserted succesfully");
       }
       db.close();
   });
   

}});


function calcArea(l,b)
{     var res=l*b
    return res;
    console.log(res);
}