import { NgModule }       from '@angular/core';

import { ProgressRoutingModule } from './progress-routing.module';
import {P01Component} from './progresses/p01.component';
import {P02Component} from './/progresses/p02.component';
import {P03Component} from './/progresses/p03.component';
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

@NgModule({
  imports: [
    ProgressRoutingModule
  ],
  declarations: [
    P01Component,
    P02Component,
    P03Component,
    P04Component,
    P05Component,
    AlgorithmComponent,
    BigDataComponent,
    CrimeComponent,
    GeoInfoComponent,
    GISComponent,
    LinuxComponent,
    MapComponent,
    MLComponent
  ]
})
export class ProgressModule {}