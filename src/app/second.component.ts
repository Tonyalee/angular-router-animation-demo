import { Component, Input } from '@angular/core';

@Component({
  selector: 'second',
  template: `<h1 class="wrap">Second Page</h1>`,
  styles: [
    `.wrap { 
      display: block; 
      width: 100%;
      background-color: rgba(240, 180, 216 ,.7); 
      height: 300px; 
      padding: 10px; 
      border-radius: 5px;
      position: absolute;
      top: 0;
      border: 1px solid red;
    }`,
  ],
})
export class SecondComponent {
  @Input() name: string;
}
