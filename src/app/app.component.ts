import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { slideIn } from './animations/router-animation';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideIn],
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
