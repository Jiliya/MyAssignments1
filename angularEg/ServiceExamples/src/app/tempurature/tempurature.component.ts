import { Component, OnInit } from '@angular/core';
import {TempuratureServices} from '../tempurature.service';
@Component({
  selector: 'app-tempurature',
  templateUrl: './tempurature.component.html',
  styleUrls: ['./tempurature.component.css'],
  providers:[TempuratureServices]
})
export class TempuratureComponent implements OnInit {
  fahrenheit:number;
  res;
  tempurature:TempuratureServices;
  constructor(tempurature:TempuratureServices) { 

    this.tempurature=tempurature;
  }
  calucalteArea()
   {
     this.res=this.tempurature.calucalteArea(this.fahrenheit)
    // return this.area;
   }

  ngOnInit() {
  }

}
/*import { Component, OnInit } from '@angular/core';
import {RecangleServices} from '../rectangle.services';
@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css'],
  providers:[RecangleServices]
})
export class RectangleComponent implements OnInit {
  length:number;
  breadth:number;
  area:number;
  perim:number;
  rectangle:RecangleServices;

  constructor(rectangle:RecangleServices) {
    this.rectangle=rectangle
   }
   calucalteArea()
   {
     this.area=this.rectangle.calucalteArea(this.length,this.breadth)
    // return this.area;
   }
   calucaltePeimeter()
   {
     this.perim=this.rectangle. calucaltePeimeter(this.length,this.breadth)
    // return this.perim;
   }
  ngOnInit() {
  }

  }*/

