import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrl: './tab1.component.css'
})
export class Tab1Component {
  message: string = 'Hello, child!';

  onNotify(message: string) {
    alert(message)
  }
}
