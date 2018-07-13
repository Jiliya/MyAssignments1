

import { Component } from '@angular/core';
@Component({
    selector: 'rectangle',
    templateUrl: './rectangle.component.html',
    styleUrls: ['./rectangle.component.css']


})
export class Rectangle{
  /*  add;
  oldArray;
  title = "Angular.ForEach";
   arr:any=[{tolist:"clean",done:false},{tolist:"cleanr",done:false}];
     addTask()
     {
         this. arr.push({tolist:this.add,done:false});
       this. add = "";
     };

     removetask()
     {  this. oldArray=this.arr;
     
    
      });
         
     }*/

   
   
   
   
   
   
   
   
   
   
   
   
    /* length:number;
    breadth:number;
    
res:number;
res1:number;
    calArea()
    {
       this. res= this.length *this. breadth;
        return this. res;
    }
    calPerimeter()
    { this.res1=2*(this.length +this. breadth);
        return  this.res1;
    }*/
     add;
     i;
    
    // arr=[{staus:true,task:"sleeping"},{staus:false,task:"learn"}]
    arr:any=["study","learn"];
    
     addTask()
     {
        this.arr.push(this.add);
     }
     RemoveTask()
    {//const index: number = this.arr.indexOf(this.value);
       // if (index !== -1) {
         //   this.arr.splice(index, 1);
       // }    
      // this.dataService.deleteMsg(message);  
        // this.arr.splice(this.i,1);
        this.arr.pop(this.i);
     }
    
}