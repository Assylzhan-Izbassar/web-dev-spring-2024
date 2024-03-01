import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
  @Input() variable: string | undefined;

  ngOnInit(): void {
    console.log(this.variable);
  }
}
