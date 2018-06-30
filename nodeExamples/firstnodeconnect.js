var MongoClient=require('mongodb').MongoClient;
//var findQuery={ name: 'neethu'};
MongoClient.connect('mongodb://127.0.0.1:27017/traial',function(err,db)
{
if(err)
{
    console.log(err);
}
else
{
  
    var resultSet=db.collection('new123').find();
    resultSet.each(function(err,doc)
    {
        console.log(doc);
    })

}
db.close();
});