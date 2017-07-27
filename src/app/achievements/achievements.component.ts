import {Component,Input,OnInit} from '@angular/core';
import {trigger,state,style,animate,transition} from  '@angular/animations';
import {Items} from './items.service'
import '../../assets/libs/js/jquery.min.js';
declare let $:any;
@Component({
    templateUrl:'./achievements.component.html',
    styleUrls:[
        './achievements.component.css'
    ],
    animations: [
    trigger('itemState', [
       state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)',
        color:'black'
      })),
      state('active',   style({
        backgroundColor: '#337ab7',
        transform: 'scale(1.1)',
        color:'white'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AchievementsComponent{
    @Input() items=Items;
    ngOnInit(){
        for(let item of this.items){
        if(item!=this.items[0]){
            item.state='inactive';
        }
        else{
            item.state='active';
        }
     }
        let newDiv = $("#content > div").eq(0);
        $("#content").height(newDiv.height());   
    }
}