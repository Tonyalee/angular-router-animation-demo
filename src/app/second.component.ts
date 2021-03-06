import { Component, Input } from '@angular/core';

@Component({
  selector: 'second',
  template: `<h1 class="wrap">Second Page</h1>`,
  styles: [
    `.wrap { display: block; background-color: rgb(240, 180, 216); height: 300px; padding: 10px; border-radius: 5px;}`,
  ],
})
export class SecondComponent {
  @Input() name: string;
}
