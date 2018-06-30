var product=require('./amtFn');
MongoClient=require('mongodb').MongoClient;
//var id=result[i]._id;

MongoClient.connect('mongodb://127.0.0.1:27017/test',function(err,db){
    if(err){
   
        console.log(err);
       }
    else{
    
        db.collection('product').find().toArray(function(err, result){
        console.log(result)
       for(var i=0;i<result.length;i++)
        {
            var x=product.amt(result[i].qty,result[i].uPrice)
            console.log("amt "+x);
            db.collection('product').update({_id:result[i]._id},{$set:{amt:x}}, {muti:true},function(err,res){
                if (err){
                    throw err;
                }
            })
             
        }


       
       //product.amt(result[0].qty,result[0].uPrice)
        // var x=product.amt(result[0]._id);
        // console.log(x);
        //var qty=result.qty;
        //var uPrice=result.uPrice;
        //var res=calcArea(qty,uPrice);
       
        db.close();
       })
    

       
       //product.amt(result[0].qty,result[0].uPrice)
        // var x=product.amt(result[0]._id);
        // console.log(x);
        //var qty=result.qty;
        //var uPrice=result.uPrice;
        //var res=calcArea(qty,uPrice);
       
   
     
       

    }
        
 
});

