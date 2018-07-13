import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  constructor() { }
login(f)
{
  if(f.valid)
  {
  console.log(f.value);
  alert("submitted succesfully")
  }
  else
  {
    alert("please enter field");
  }
}
  ngOnInit() {
  }

}
