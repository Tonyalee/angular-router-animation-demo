import { Component, Input } from '@angular/core';

@Component({
  selector: 'first',
  template: `<h1 class="wrap">First Page</h1>`,
  styles: [
    `.wrap { background-color: rgb(190, 230, 216); height: 300px; padding: 10px; border-radius: 5px;}`,
  ],
})
export class FirstComponent {
  @Input() name: string;
}
