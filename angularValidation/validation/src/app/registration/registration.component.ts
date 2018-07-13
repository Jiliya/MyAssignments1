import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


    cms:any=["india","ireland","sreelanka"];
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
    
    quali1;
    quali2;
    chekd=[0];
     res;
   checking()
   { 
     
     if(this.quali1==true)
     {
       this.chekd.push(this.quali1)
     }
     if(this.quali2==true)
     {
       this.chekd.push(this.quali2)
     }
     if (this.chekd.length == 1 ) {
       //alert(this.chekd.length);
      alert('please select atleast one select box')
   }}

  
  constructor() { }

  ngOnInit() {
  }

}
