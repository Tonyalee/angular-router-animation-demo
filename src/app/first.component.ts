import { Component, Input } from '@angular/core';

@Component({
  selector: 'first',
  template: `<h1 class="wrap">First Page</h1>`,
  styles: [
    `
    .wrap { 
      background-color: rgba(190, 230, 216,.7); 
      width: 100%;
      height: 300px; padding: 10px; 
      border-radius: 5px;
      position: absolute;
      top: 0;
      border: 1px solid red;
    }`,
  ],
})
export class FirstComponent {
  @Input() name: string;
}
