import { Component, OnInit } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import{HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  http:HttpClient;
  celcius:string;
  url="http://127.0.0.1:3001/lnt";
  constructor(http:HttpClient) {
    this.http=http;
   /* this.http.get(this.url,{responseType:'text'})
    .subscribe(response=>
      {console.log("response="+response)
    alert(response.toString());
   },(error)=>{
     alert(error)
   })*/
  }
  submit(f:any)
{
 let data=JSON.stringify(f.value);
 this.http.post(this.url,data)
 .subscribe((res)=>{alert("sucess")
console.log(res)
this.celcius=res.toString();
 },(err)=>
 {
   alert("error");
 
});
} 
 
ngOnInit() {
  }

 }

