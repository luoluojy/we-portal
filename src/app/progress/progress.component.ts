import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
    templateUrl:'./progress.component.html',
    styleUrls:[
        './progress.component.css'
    ]
})
export class ProgressComponent{
    constructor(private router:Router){}
    onSelect(id: string) {
        if(id.startsWith("tag")){
            let tag=id.substr(4,id.length-4);
            this.router.navigate(['/progress/tag', tag]);
        }
        else{ 
            this.router.navigate(['/progress', id]);
        }
    }
}