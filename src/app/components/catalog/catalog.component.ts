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
  productsTypes = new Array<String>();
  productsScreens = new Array<number>();
  productsManufacturers = new Array<String>();

  interProducts: Product[];

  checkedTypesTable = new Array<string>();
  checkedScreensTable = new Array<string>();
  checkedManufacturersTable = new Array<string>();

  searchChoicesMap = new Map([
    ["typesTable", this.checkedTypesTable],
    ["screensTable", this.checkedScreensTable],
    ["manufacturersTable", this.checkedManufacturersTable]
  ]);

  productsNbrePerPage: number = 9;
  disableIncrement: boolean = true;
  disableDecrement: boolean = false;
  activeNameUp: boolean = false;
  activeNameDown: boolean = false;
  activePriceUp: boolean = false;
  activePriceDown: boolean = false;

  faMinusCircle = faMinusCircle;
  faPlusCircle = faPlusCircle;

  showType=false;
  showScreen=false;
  showManufacturer=false;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(){
    this.productService.getProductsList().subscribe(
      data => {
        this.products = data;
        this.interProducts = data;
      }
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

  getAllProductsTypes() {
    this.productsTypes = this.products.map(product => product.type).filter((value, index, self) => self.indexOf(value) === index);
    for(var i = 0 ; i < this.productsTypes.length ; i++){
      this.productsTypes[i] = this.productsTypes[i].charAt(0).toUpperCase() + this.productsTypes[i].substr(1);;
    }  
  }

  getAllProductsScreens() {
    this.productsScreens = this.products.map(product => product.screen).filter((value, index, self) => self.indexOf(value) === index).sort((n1,n2) => n1 - n2);
  }

  getAllProductsManufacturers() {
    this.productsManufacturers = this.products.map(product => product.brand).filter((value, index, self) => self.indexOf(value) === index);
  }

  switchOnOff(siwtchChecked, switchId){
    if(switchId == "showType") {
      if(siwtchChecked==true){
        this.getAllProductsTypes();
        this.showType = true;
      }
      else
        this.showType = false;
    }
    else if(switchId == "showScreen") {
      if(siwtchChecked==true){
        this.getAllProductsScreens();
        this.showScreen = true;
      }
      else
        this.showScreen = false;
    }
    else if(switchId == "showManufacturer") {
      if(siwtchChecked==true){
        this.getAllProductsManufacturers();
        this.showManufacturer = true;
      }
      else
        this.showManufacturer = false;
    }
  }

  clearAllcheckbox(value) {
    if(value == "clearTypes") {
      this.productsTypes.forEach(type => {
        var element = <HTMLInputElement> document.getElementById(type.toString());
        if(element.checked)
          element.checked = false;
      })
    }
    else if(value == "clearScreens") {
      this.productsScreens.forEach(screen => {
        var element = <HTMLInputElement> document.getElementById(screen.toString());
        if(element.checked)
          element.checked = false;
      })
    }
    else if(value == "clearManufacturers") {
      this.productsManufacturers.forEach(manufacturer => {
        var element = <HTMLInputElement> document.getElementById(manufacturer.toString());
        if(element.checked)
          element.checked = false;
      })
    }
  }

  searchByType(tag) {
    let id = tag.id;
    let isChecked = tag.checked;
    if(isChecked) {
      if(this.searchChoicesMap.get("typesTable").length == 0
        && this.searchChoicesMap.get("screensTable").length == 0
        && this.searchChoicesMap.get("manufacturersTable").length == 0) {
        this.products = [];
      }
      this.products = this.products.concat(this.interProducts.filter(product => product.type == id.toString().toLowerCase())).sort((a, b) => (a.price > b.price ? 1 : -1));
      this.searchChoicesMap.get("typesTable").push(id.toString());
    }
    else {
      const index = this.searchChoicesMap.get("typesTable").indexOf(id.toString());
      if(index > -1)
      this.searchChoicesMap.get("typesTable").splice(index, 1);
      if(this.searchChoicesMap.get("typesTable").length != 0)
        this.products = this.products.filter(product => product.type != id.toString().toLowerCase()).sort((a, b) => (a.price > b.price ? 1 : -1));
      else if(this.searchChoicesMap.get("typesTable").length == 0
              && this.searchChoicesMap.get("screensTable").length == 0
              && this.searchChoicesMap.get("manufacturersTable").length == 0)
        this.products = this.interProducts;
    }
    console.log(this.products)
  }

  searchByScreen(tag) {
    let id = tag.id;
    let isChecked = tag.checked;
    if(isChecked) {
      if(this.searchChoicesMap.get("typesTable").length == 0
        && this.searchChoicesMap.get("screensTable").length == 0
        && this.searchChoicesMap.get("manufacturersTable").length == 0) {
        this.products = [];
      }
      this.products = this.products.concat(this.interProducts.filter(product => product.screen.toString() == id.toString())).sort((a, b) => (a.price > b.price ? 1 : -1));
      this.searchChoicesMap.get("screensTable").push(id.toString());
    }
    else {
      const index = this.searchChoicesMap.get("screensTable").indexOf(id.toString());
      if(index > -1)
      this.searchChoicesMap.get("screensTable").splice(index, 1);
      if(this.searchChoicesMap.get("screensTable").length != 0)
        this.products = this.products.filter(product => product.screen.toString() != id.toString()).sort((a, b) => (a.price > b.price ? 1 : -1));
      else if(this.searchChoicesMap.get("typesTable").length == 0
              && this.searchChoicesMap.get("screensTable").length == 0
              && this.searchChoicesMap.get("manufacturersTable").length == 0)
        this.products = this.interProducts;
    }
    console.log(this.products)
  }

}
