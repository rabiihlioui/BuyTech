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

/*   //////productsNbrePerPage: number = 10;
  limitProductNbrePerPage: number = 10;
  step: number = 2;
  //////disableIncrement: boolean = true;
  //////disableDecrement: boolean = false;

  paginationControllers: Array<boolean | number> = [ true, false, 10 ];  // 0 index for disableIncrement
                                                                         // 1 index for disableDecrement
                                                                         // 2 index for productsNbrePerPage */

  faMinusCircle = faMinusCircle;
  faPlusCircle = faPlusCircle;
/*   faSort = faSort;

  sorted: boolean = false; */

  columnDefs = [
    { headerName: 'Type', field: 'type', sortable: true, filter: true },
    { headerName: 'Brand', field: 'brand', sortable: true, filter: true },
    { headerName: 'Sub Brand', field: 'subBrand', sortable: true, filter: true },
    { headerName: 'Price (TND)', field: 'price', sortable: true, sortingOrder: ["asc", "desc"], filter: true },
    { headerName: 'Operating System', field: 'operatingSystem', sortable: true, filter: true },
    { headerName: 'Processor Technology', field: 'processorTechnology', sortable: true, filter: true },
    { headerName: 'Graphics', field: 'graphics', sortable: true, filter: true },
    { headerName: 'Memory', field: 'memory', sortable: true, filter: true },
    { headerName: 'Hard Drive', field: 'hardDrive', sortable: true, filter: true },
    { headerName: 'Screen (inch)', field: 'screen', sortable: true, filter: true },
    { headerName: 'Quantity', field: 'quantity', sortable: true, filter: true }
];

rowData = [];

  constructor(
    private productService: ProductService,
    private paginationService: PaginationService
  ) { }

  ngOnInit() {
    this.getAllProductsList();
  }

  getAllProductsList() {
    this.productService.getProductsList().subscribe(
      data => this.rowData = data
    );
  }

/*   incrementNbreOfProducts() {
    let productsNbrePerPage: any = this.paginationControllers[2];
    this.paginationControllers = this.paginationService.incrementNbreOfProducts(productsNbrePerPage,
                                                                                this.limitProductNbrePerPage,
                                                                                this.step);
  }

  decrementNbreOfProducts() {
    let productsNbrePerPage: any = this.paginationControllers[2];
    this.paginationControllers = this.paginationService.decrementNbreOfProducts(productsNbrePerPage,
                                                                                this.step);
  } */

}
