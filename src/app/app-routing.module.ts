import {NgModule} from '@angular/core';

import {RouterModule,Routes} from '@angular/router';

import {PageNotFoundComponent} from './pageNotFound.component';
import {AboutUsComponent} from './aboutus/aboutus.component';
import {AchievementsComponent} from './achievements/achievements.component';
import {ProgressComponent} from './progress/progress.component';

import {HomePageComponent} from './homepage/homepage.component';
import { BrowserModule }  from '@angular/platform-browser';

const appRoutes:Routes=[
    {path:'',component:HomePageComponent,data:{title:'GeoThinking | 主页'}},
    {path:'aboutus',component:AboutUsComponent,data:{title:'GeoThinking | 团队概况'}},
    {path:'achievements',component:AchievementsComponent,data:{title:'GeoThinking | 研究成果'}},
    {path:'progress',component:ProgressComponent,data:{title:'GeoThinking | 研究进展'}},
    {path:'**',component:PageNotFoundComponent,data:{title:'访问的页面不存在！'}},
]

@NgModule({
    imports:[
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations:[
        AboutUsComponent,
        HomePageComponent,
        PageNotFoundComponent,
        AchievementsComponent,
        ProgressComponent
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}