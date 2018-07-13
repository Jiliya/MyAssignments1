import { Component } from '@angular/core';
import { RANGE_VALUE_ACCESSOR } from '@angular/forms/src/directives/range_value_accessor';
@Component({
    selector: 'student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']


})
export class Student{
    sum;
stu={eId:1,name:"jia",marks:[{sname:"mongo",mark:20},{sname:"mvc",mark:30}],

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

}}