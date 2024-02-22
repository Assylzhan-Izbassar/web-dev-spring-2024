import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrl: './tab1.component.css'
})
export class Tab1Component {
  text: string = 'message';
  childText: string = '';

  constructor() {}

  onChild(text: string) {
    this.childText = text;
  }


}
