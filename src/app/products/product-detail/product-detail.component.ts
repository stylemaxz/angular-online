import { ProductService } from './../shared/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  id: number;
  productDetail: any[];
  title: string;
  sub: Subscription;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.title = this.route.snapshot.paramMap.get('title');
    this.getDetail();
  }

  getDetail() {
    this.sub = this.productService.getDetail(this.id).subscribe(
      (productDetail) => {
        console.log(productDetail);
        this.productDetail = productDetail;
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
