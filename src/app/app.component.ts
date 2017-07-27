import { Component,OnInit,ElementRef,ViewChild } from '@angular/core';

import {Title} from '@angular/platform-browser';
import {Router,NavigationEnd,ActivatedRoute} from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import '../assets/css/styles.css';
import '../assets/libs/js/bootstrap.min.js';
import '../assets/libs/js/jquery.min.js';
import '../assets/libs/css/bootstrap.min.css';
import '../assets/libs/js/jQueryRotate.js';
declare let $:any;
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 @ViewChild('course')
 courseLi:ElementRef;
  constructor(private titleService:Title,private activatedRoute:ActivatedRoute,private router:Router){}
  ngOnInit(){
    this.router.events
      .filter(event=>event instanceof NavigationEnd)
      .map(()=>this.activatedRoute)
      .map(route=>{
        while(route.firstChild) route=route.firstChild;
        return route
      })
      .filter(route=>route.outlet==='primary')
      .mergeMap(route=>route.data)
      .subscribe((event)=>this.titleService.setTitle(event['title']));
  }
    degree:number;
  toggle(){
        if(this.degree==180)
          this.degree=0;
        else 
          this.degree=180;
        $(this.courseLi.nativeElement.querySelector('span')).rotate(this.degree);
      
    }
}
