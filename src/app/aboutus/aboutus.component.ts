import {Component,Input,OnInit} from '@angular/core';
import {trigger,state,style,animate,transition} from  '@angular/animations';
import {Items} from './items.service';
import '../../assets/libs/js/jquery.min.js';
declare let $:any;
@Component({
    template:`
    <div class="about" style="height:1500px;width:80%;margin:0px auto;padding-bottom:20px;">
        <ul class="about-left" style="float:left;width:15%;">
        <li *ngFor="let item of items"
            [@itemState]="item.state"
            (click)="item.toggleState()">
            {{item.name}}
        </li>
        </ul>
        <div id="content" style="overflow:hidden;position:relative;float:right;width:80%;margin-left:5%;">
            <div id="content1">负责人介绍</div>
            <div id="content2">学生成员</div>
            <div id="content3">往届学生</div>
            <div id="content4">企业合作</div>
            <div id="content5">科研合作</div>
        </div>
        </div>
    `,
    styleUrls:[
        './aboutus.component.css'
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
export class AboutUsComponent implements OnInit{
    @Input() items=Items;
    ngOnInit(){
        for(let item of this.items){
        if(item!=this.items[0]){
            item.state='inactive';
        }
        else{
            item.state='active';
        }
        let newDiv = $("#content > div").eq(0);
        $("#content").height(newDiv.height());
     }   
    }
}