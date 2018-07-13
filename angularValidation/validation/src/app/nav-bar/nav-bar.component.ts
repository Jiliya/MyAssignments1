import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  router:Router;
  constructor(router:Router) { 
    this.router=router;
  }
  goHome()
  {
    this.router.navigate(['registration']);
  }
  goAbout()
  {
    this.router.navigate(['b-pay']);
  }
 
  ngOnInit() {
  }

}
