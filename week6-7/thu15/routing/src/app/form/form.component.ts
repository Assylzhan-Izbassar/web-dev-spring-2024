import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() variable: string | undefined;
  @Output() output = new EventEmitter<string>();

  randomNumber: string | undefined;

  constructor () {
    setInterval(() => {
      this.randomNumber = Math.random() + '';
      this.output.emit(this.randomNumber);
    }, 1000)
  }
}
