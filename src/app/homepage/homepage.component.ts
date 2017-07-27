import {Component,OnInit} from '@angular/core';

import '../../assets/libs/js/jquery.min.js';
declare let $:any;
@Component({
    templateUrl:'./homepage.component.html',
    styleUrls:[
        './homepage.component.css'
    ]
})
export class HomePageComponent implements OnInit{
    ngOnInit(){
       $("#elems li:not(:first)").css("display","none");
       let last=$("#elems li:last");
       let first=$("#elems li:first");
       setInterval(()=>{
           if(last.is(":visible")){
               first.fadeIn(4000).addClass("in");
               last.hide();
           }
            else{
                $("#elems li:visible").addClass("in");
                $("#elems li.in").next().fadeIn(4000);
                $("li.in").hide().removeClass("in");
            }
       },5000);
    }
}


  