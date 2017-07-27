import {NgModule} from '@angular/core';

import {RouterModule,Routes} from '@angular/router';

import {ProgressComponent} from './progress.component';
import {P01Component} from './progresses/p01.component';
import {P02Component} from './progresses/p02.component';
import {P03Component} from './progresses/p03.component';
import {P04Component} from './progresses/p04.component';
import {P05Component} from './progresses/p05.component';
import {AlgorithmComponent} from './tags/algorithm.component'
import {BigDataComponent} from './tags/bigdata.component'
import {CrimeComponent} from './tags/crime.component'
import {GeoInfoComponent} from './tags/geoinfo.component'
import {GISComponent} from './tags/gis.component'
import {LinuxComponent} from './tags/linux.component'
import {MapComponent} from './tags/map.component'
import {MLComponent} from './tags/ml.component'

const progressesRoutes:Routes=[
    {path:'progress/p01',component:P01Component,data:{title:'进展01'}},
    {path:'progress/p02',component:P02Component,data:{title:'进展02'}},
    {path:'progress/p03',component:P03Component,data:{title:'进展03'}},
    {path:'progress/p04',component:P04Component,data:{title:'进展04'}},
    {path:'progress/p05',component:P05Component,data:{title:'进展05'}},

    {path:'progress/tag/algorithm',component:AlgorithmComponent,data:{title:'算法'}},
    {path:'progress/tag/bigdata',component:BigDataComponent,data:{title:'大数据'}},
    {path:'progress/tag/crime',component:CrimeComponent,data:{title:'犯罪'}},
    {path:'progress/tag/geoinfo',component:GeoInfoComponent,data:{title:'地理信息'}},
    {path:'progress/tag/gis',component:GISComponent,data:{title:'GIS'}},
    {path:'progress/tag/linux',component:LinuxComponent,data:{title:'Linux'}},
    {path:'progress/tag/map',component:MapComponent,data:{title:'地图'}},
    {path:'progress/tag/ml',component:MLComponent,data:{title:'机器学习'}}
]

@NgModule({
    imports:[
        RouterModule.forChild(progressesRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class ProgressRoutingModule{}