import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms'
import{AbstractControl}from '@angular/forms';
@Component({
  selector: 'app-reactie-fo',
  templateUrl: './reactie-fo.component.html',
  styleUrls: ['./reactie-fo.component.css']
})
export class ReactieFoComponent implements OnInit {

  constructor() { }
  loginForm=new FormGroup(
    {
      name:new FormControl('abc',[Validators.required,Validators.minLength(3)]),
      paswd:new FormControl('',[Validators.required,Validators.pattern("[a-z][A-z0-9]")]),
      url:new FormControl('',[Validators.required,this.validateUrl])
    }
  )

  ngOnInit() {
  }

validateUrl(control:AbstractControl)
{
  if(!control.value.startsWith('https')||!control.value.includes('.io'))
  {
    return {inValidUrl:true};
  }
  return null;
}
  

  send()
  {
    if(this.loginForm.valid)
    {
      alert("valid");
      console.log("submitted",this.loginForm.value);
    }
  }

}
