import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

import { faMinusCircle, faPlusCircle, faSort } from '@fortawesome/free-solid-svg-icons';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[];

  //productsNbrePerPage: number = 10;
  limitProductNbrePerPage: number = 10;
  step: number = 2;
  //disableIncrement: boolean = true;
  //disableDecrement: boolean = false;

  paginationControllers: Array<boolean | number> = [ true, false, 10 ];  // 0 index for disableIncrement
                                                                         // 1 index for disableDecrement
                                                                         // 2 index for productsNbrePerPage

  faMinusCircle = faMinusCircle;
  faPlusCircle = faPlusCircle;
  faSort = faSort;

  sorted: boolean = false;

  constructor(
    private productService: ProductService,
    private paginationService: PaginationService
  ) { }

  ngOnInit() {
    this.getAllProductsList();
  }

  getAllProductsList() {
    this.productService.getProductsList().subscribe(
      data => this.products = data
    );
  }

  incrementNbreOfProducts() {
    let productsNbrePerPage: any = this.paginationControllers[2];
    this.paginationControllers = this.paginationService.incrementNbreOfProducts(productsNbrePerPage,
                                                                                this.limitProductNbrePerPage,
                                                                                this.step);
  }

  decrementNbreOfProducts() {
    let productsNbrePerPage: any = this.paginationControllers[2];
    this.paginationControllers = this.paginationService.decrementNbreOfProducts(productsNbrePerPage,
                                                                                this.step);
  }

}
