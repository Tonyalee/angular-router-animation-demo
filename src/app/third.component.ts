import { Component, Input } from '@angular/core';

@Component({
  selector: 'third',
  template: `<h1 class="wrap">Third Page</h1>`,
  styles: [
    `
    .wrap { 
      background-color: rgba(80, 230, 216, .7); 
      width: 100%;
      height: 300px; padding: 10px; 
      border-radius: 5px;
      position: absolute;
      top: 0;
      border: 1px solid red;
    }`,
  ],
})
export class ThirdComponent {
  @Input() name: string;
}
