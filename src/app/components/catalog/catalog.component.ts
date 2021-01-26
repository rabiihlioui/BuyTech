import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.test();
  }

  test(){
    this.productService.getProductsList().subscribe(
      data => {
        this.products = data;
        console.log(this.products)
      }
    )
  }

}
