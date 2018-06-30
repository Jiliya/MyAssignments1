function gNetpay(basic)
{
    if(basic<5000)
    { var gross=0;
        gross =basic+0.3;
        var netpay=gross*basic-1000;
        return netpay;
    }
   else if(basic>5000)
    {var gross=0;
        gross =basic+0.4;
        var netpay=gross*basic-1000;
        return netpay;
    }

}
module.exports.gNetpay=gNetpay;