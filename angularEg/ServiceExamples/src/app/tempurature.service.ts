import {Injectable} from '@angular/core'
@Injectable()
export class TempuratureServices{
    calucalteArea(fahrenheit:number)
    {
        var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    return message
    }
   /* calucaltePeimeter(length:number,breadth:number)
    {
        return 2*(length*breadth);
    }*/
}

/*function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} */