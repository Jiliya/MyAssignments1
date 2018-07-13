import {Pipe,PipeTransform} from '@angular/core'
@Pipe({name:'summary'})
export class SummaryStringPipe implements PipeTransform{
    res;
    transform(str:string,count:number):string{
        let revStr:string="";
         count = (count) ? count : 10;
         return str.substring(0,count);
      

    }
}