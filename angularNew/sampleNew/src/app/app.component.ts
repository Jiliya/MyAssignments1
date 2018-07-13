import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  name:string="raj";
   a:number=10;
   b=20;
   c=6.9897675576576;
   d="2/03/2018";
   arr=[10,20,30,50,60,70,80];
  
  
   namee="heloooMyWorld";

   func()
   {
     alert("hello");
   }
   func1()
   {
     alert("in mose over hello");
   }

   func3(e)
   {
     alert(e.keyCode);
   }
   
   add()
   {
     return this.a+this.b;
   }
   fact(txt1)
   { var fact=1;
     for(let i=1;i<=txt1;i++)
     {
     fact=fact*i;
     }
     return fact;
   }
   employee=[{
     ename:"jiya",eid:14,bpay:1200
   },{
    ename:"jiliya",eid:11,bpay:11200
  }]

 pep=[{
    ename:"jiya",bpay:1200
  },{
   ename:"jiliya",bpay:11200
 }]
  myFunc(et)
  {
 alert("x="+et.clientX+"y="+et.clientY);

  }
}
