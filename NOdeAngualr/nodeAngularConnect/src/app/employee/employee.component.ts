import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  http:HttpClient;
 empID;
resData:any;
  url="http://127.0.0.1:3000/";
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
 this.http.post(this.url,data,{responseType:'json'})
 .subscribe((res)=>{alert("sucess")
console.log(res);
   let d = JSON.stringify(res);
this.resData = JSON.parse(d);
console.log(this.resData)
//this.empID=res.toString();
 },(err)=>
 {
   alert("error");
 
});
} 

  ngOnInit() {
  }

}
