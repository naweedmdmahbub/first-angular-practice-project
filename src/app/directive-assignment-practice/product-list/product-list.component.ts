import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  // styleUrls: ['./product-list.component.css'],
  styles: [`
    .productColor {
      color: white;
    }
  `],
})
export class ProductListComponent implements OnInit {
  displayStatus = true;
  count = 1;
  products = [];

  constructor() {}

  ngOnInit(): void {}
  toogleStatus(){
    this.displayStatus = !this.displayStatus;
  }

  displayDetails(){
    this.products.push(new Date());
    // this.products.push(this.count);
    // this.count++;
  }

  getColor(){
    
  }
}
