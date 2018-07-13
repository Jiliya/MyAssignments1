import { Component, OnInit } from '@angular/core';
import {ReverseStringPipe} from '../reverse.pipe';
@Component({
  selector: 'app-rev-string',
  templateUrl: './rev-string.component.html',
  styleUrls: ['./rev-string.component.css']
})
export class RevStringComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
