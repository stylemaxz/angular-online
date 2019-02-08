import { Product } from './shared/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './shared/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProduct().subscribe(
      (productsItem) => {
        // console.log(products);
        this.products = productsItem;
      }
    );
  }

}
