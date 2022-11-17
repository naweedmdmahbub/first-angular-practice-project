import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styles: [`
    p {
      color: white;
      background: green;
    }
  `]
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
