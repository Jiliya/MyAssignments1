import { Component } from '@angular/core';

@Component({
    selector: 'arryOfObj',
    templateUrl: './arryOfObj.component.html',
    styleUrls: ['./arryOfObj.component.css']


})
export class ArryOfObj{
    sum;
stu=[{eId:1,name:"jia",marks:[{sname:"mongo",mark:20},{sname:"mvc",mark:30}],

sumTot()
{this.sum=0;
    for(var i=0;i<this.marks.length;i++)
    {
      this.sum=this.sum + this.marks[i].mark;
    }
    return this.sum;

},
avg()
{
    return this.sumTot()/this.marks.length;
}
},
{eId:2,name:"jia",marks:[{sname:"mongo",mark:20},{sname:"mvc",mark:30}],

sumTot()
{this.sum=0;
    for(var i=0;i<this.marks.length;i++)
    {
      this.sum=this.sum + this.marks[i].mark;
    }
    return this.sum;

},
avg()
{
    return this.sumTot()/this.marks.length;
}




 }]}