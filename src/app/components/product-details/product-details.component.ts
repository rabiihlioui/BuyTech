import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  prodId: number;
  productDetails: Product

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.prepareProductDetails();
  }

  prepareProductDetails() {
    this.prodId = this.activatedRoute.snapshot.params['prodId'];
    this.productService.getProductById(this.prodId).subscribe(
      data => this.productDetails = data
    );
  }

}
