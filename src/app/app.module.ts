import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import {RouterModule,Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {ProgressRoutingModule} from './progress/progress-routing.module';
import { AppComponent } from './app.component';
import {ProgressModule} from './progress/progress.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    ProgressModule,
    AppRoutingModule,BrowserAnimationsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class AppModule { }
