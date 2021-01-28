import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products: Product[];
  productsNbrePerPage: number = 9;
  disableIncrement: boolean = true;
  disableDecrement: boolean = false;
  activeNameUp: boolean = false;
  activeNameDown: boolean = false;
  activePriceUp: boolean = false;
  activePriceDown: boolean = false;

  faMinusCircle = faMinusCircle;
  faPlusCircle = faPlusCircle;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(){
    this.productService.getProductsList().subscribe(
      data => this.products = data
    )
  }

  incrementNbreOfProducts() {
    if(this.productsNbrePerPage < 9) {
      this.productsNbrePerPage += 3;
      this.disableIncrement = false;
      this.disableDecrement = false;
      if(this.productsNbrePerPage >= 9) {
        this.disableIncrement = true;
        this.disableDecrement = false;
      }
    }
  }

  decrementNbreOfProducts() {
    if(this.productsNbrePerPage > 4) {
      this.productsNbrePerPage -= 3;
      this.disableIncrement = false;
      this.disableDecrement = false;
      if(this.productsNbrePerPage <= 3) {
        this.disableIncrement = false;
        this.disableDecrement = true;
      }
    }
  }

  sortProductNameUp() {
    this.productService.getProductsBySortType("nameUp").subscribe(
      data => {
        this.products = data;
        this.activeClassSorting("nameUp");
      }
    );
  }

  sortProductNameDown() {
    this.productService.getProductsBySortType("nameDown").subscribe(
      data => {
        this.products = data;
        this.activeClassSorting("nameDown");
      }
    );
  }

  sortProductPriceUp() {
    this.productService.getProductsBySortType("priceUp").subscribe(
      data => {
        this.products = data;
        this.activeClassSorting("priceUp");
      }
    );
  }

  sortProductPriceDown() {
    this.productService.getProductsBySortType("priceDown").subscribe(
      data => {
        this.products = data;
        this.activeClassSorting("priceDown");
      }
    );
  }

  activeClassSorting(sortType: string) {
    if(sortType == "nameUp") {
      this.activeNameUp = true;
      this.activeNameDown = false;
      this.activePriceUp = false;
      this.activePriceDown = false;
    }
    else if(sortType == "nameDown") {
      this.activeNameUp = false;
      this.activeNameDown = true;
      this.activePriceUp = false;
      this.activePriceDown = false;
    }
    else if(sortType == "priceUp") {
      this.activeNameUp = false;
      this.activeNameDown = false;
      this.activePriceUp = true;
      this.activePriceDown = false;
    }
    else if(sortType == "priceDown") {
      this.activeNameUp = false;
      this.activeNameDown = false;
      this.activePriceUp = false;
      this.activePriceDown = true;
    }
  }

}
