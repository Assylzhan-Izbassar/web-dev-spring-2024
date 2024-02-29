import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit {
  greeting: string = 'Hello!';
  products?: Product[];

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.loadData();
  }

  private loadData(): void {
    this.productService.getProducts().subscribe({
      next: (response: any) => {
        this.products = response['products'];
      }, 
      error: (error) => {
        console.log(error);
      }
    });
  }
}
