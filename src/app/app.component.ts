import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations/router-animation';
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation],
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}

  aniStart($event: AnimationEvent) {
    console.log('wallet aniStart', $event);
  }

  aniEnd($event: AnimationEvent) {
    console.log('wallet aniEnd', $event);
  }
}
