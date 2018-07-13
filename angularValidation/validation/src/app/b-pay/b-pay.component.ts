import { Component, OnInit } from '@angular/core';
import {bPayServices} from '../bPayCal.services';
@Component({
  selector: 'app-b-pay',
  templateUrl: './b-pay.component.html',
  styleUrls: ['./b-pay.component.css'],
  providers:[bPayServices]
})
export class BPayComponent implements OnInit {
  basicPay:number;
   nPay:number;
   bPay:bPayServices;


   login(f)
    {
      if(f.valid)
      {
        console.log(f.value)
        alert("sucessful");
        
      }
      else{
        alert("not valid");
      }
    }
  constructor(bPay:bPayServices) 
  { this.bPay=bPay;}

  getNetpay()
   {
     this. nPay=this.bPay.getNetpay(this.basicPay)
    // return this.nPay;
   }


  ngOnInit() {
  }

}
