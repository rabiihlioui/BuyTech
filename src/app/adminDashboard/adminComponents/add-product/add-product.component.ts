import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  prodTypes: string[];

  prodType: string;

  constructor(
    private productService: ProductService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.loadProductTypes();
  }

  addProduct(product: Product) {
    this.productService.createProduct(product).subscribe(
      data => this.displaySuccessToastr('Product has been added successfully'),
      error => this.displayErrorToastr('An error has occured. Please try again')
    )
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

  loadProductTypes(){
    this.productService.getProductTypesList().subscribe(
      data => this.prodTypes = data
    );
  }

}
