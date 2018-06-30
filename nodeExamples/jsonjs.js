function listInstock(res)
{
    var instock= data.filter(function(item)
{
     return item.avail==="in stock";
});
 res.end(JSON.stringify(instock))
}


function listOnBackOrder(res)
{
    var onorder=data.filter(function(item)
{
     return item.avail==="on back order";
});
 res.end(JSON.stringify(onorder));
}
module.export.Instockonnew=listInstock;
module.export.listOnBackOrder=listOnBackOrder;
