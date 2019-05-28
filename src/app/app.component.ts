import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  @ViewChild('course')
  courseLi: ElementRef;
  degree: number;
  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data)
      )
      .subscribe(event => this.titleService.setTitle(event.title));
  }
  toggle() {
    if (this.degree === 180) {
      this.degree = 0;
    } else {
      this.degree = 180;
    }
    $(this.courseLi.nativeElement.querySelector('span')).rotate(this.degree);
  }
}
