import {Injectable} from '@angular/core';
@Injectable()
export class bPayServices
{

   getNetpay(basic:number)
   {
     if(basic<=5000)
     {
         var netpay=basic+0.3*basic-1000;
         return netpay;
     }
    else if(basic>5000)
     {
         var netpay=basic+0.4*basic-1000;
         return netpay;
     }
 
   }

}
//module.exports.gNetpay=gNetpay;

/*import {Injectable} from '@angular/core'
@Injectable()
export class RecangleServices{
    calucalteArea(length:number,breadth:number)
    {
        return length*breadth;
    }
    calucaltePeimeter(length:number,breadth:number)
    {
        return 2*(length*breadth);
    }
*/