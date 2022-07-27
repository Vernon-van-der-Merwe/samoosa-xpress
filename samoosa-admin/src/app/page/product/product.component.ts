import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.getAll();
  }

  async getAll() {
    this.service.getAll().subscribe((data) => {
      console.log(data);
    });
  }
}
