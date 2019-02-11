import { Product } from './shared/product.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from './shared/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy{

  products: Product[];
  sub: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.sub = this.productService.getProduct().subscribe(
      (productsItem) => {
        // console.log(products);
        this.products = productsItem;
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
