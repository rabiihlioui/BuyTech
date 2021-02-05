import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

import { faMinusCircle, faPlusCircle, faSort } from '@fortawesome/free-solid-svg-icons';
import { PaginationService } from 'src/app/services/pagination.service';

import { ToastrService } from 'ngx-toastr';

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
    { headerName: 'Type', field: 'type',
        cellRenderer: (data) => {
          return data.value[0].toUpperCase() + data.value.substr(1)
        }
    },
    { headerName: 'Brand', field: 'brand' },
    { headerName: 'Sub Brand', field: 'subBrand' },
    { headerName: 'Price (TND)', field: 'price', sortingOrder: ["asc", "desc"] },
    { headerName: 'Operating System', field: 'operatingSystem' },
    { headerName: 'Processor Technology', field: 'processorTechnology' },
    { headerName: 'Graphics', field: 'graphics' },
    { headerName: 'Memory', field: 'memory' },
    { headerName: 'Hard Drive', field: 'hardDrive' },
    { headerName: 'Screen (inch)', field: 'screen' },
    { headerName: 'Quantity', field: 'quantity' }
];

defaultColDef = {
  editable: true,
  sortable: true,
  filter: true
};

editType = 'fullRow';

rowData = [];

updatedProducts = []

gridApi: any;
columnApi: any;

  constructor(
    private productService: ProductService,
    private paginationService: PaginationService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getAllProductsList();
    this.resetUpdatedRowsTable();
  }

  getAllProductsList() {
    this.productService.getProductsList().subscribe(
      data => this.rowData = data
    );
  }

  resetUpdatedRowsTable() {
    this.updatedProducts = [];
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

/*   onGridReady(event: any) {
    this.gridApi = event.api;
    this.columnApi = event.columnApi;
  }
  (gridReady)="onGridReady($event)" */

/*   onRowClicked(event: any) {
    console.log('row', event);
  }
  (rowClicked)='onRowClicked($event)
 */

/*   onSelectionChanged(event: any) {
    console.log("selection", event);
    (selectionChanged) = 'onSelectionChanged($event)'
  } */

  onRowValueChanged(event: any) {
    let updatedProduct = event.data;
    for (let i = 0; i < this.updatedProducts.length; i++) {
      const currentProduct = this.updatedProducts[i];
      if(updatedProduct.id_prod == currentProduct.id_prod) {
        const index = this.updatedProducts.indexOf(currentProduct, 0);
        this.updatedProducts.splice(index, 1);
      } 
    }
    this.updatedProducts.push(updatedProduct)
    console.log(this.updatedProducts)
  }

  updateRows() {
    let updatedProductsNbre = this.updatedProducts.length;
    if(updatedProductsNbre == 1) {
      this.productService.updateProduct(this.updatedProducts[0].id_prod, this.updatedProducts[0]).subscribe(
        data => this.displaySuccessToastr('Product has been updated successfully'),
        error => this.displayErrorToastr('An error has occured. Please try again')
      );
      this.resetUpdatedRowsTable();
    }
    else {
      this.productService.updateMultipleProducts(this.updatedProducts).subscribe(
        data => this.displaySuccessToastr(data),
        error => this.displaySuccessToastr(error.error.text)
      );
      this.resetUpdatedRowsTable();
    }
  }

  displaySuccessToastr(message: string) {
    this.toastrService.success(message, 'Success', {
      timeOut: 6000,
      progressBar: false
    });
  }

  displayErrorToastr(message: string) {
    this.toastrService.error(message, 'Error', {
      timeOut: 6000,
      progressBar: false
    });
  }

}
