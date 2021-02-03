import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

  incrementNbreOfProducts(productsNbrePerPage: number,
                          limitProductNbrePerPage: number,
                          step: number
  ): any
  {
    let paginationControllers: Array<boolean | number>;  // 0 index for disableIncrement
                                                         // 1 index for disableDecrement
                                                         // 2 index for productsNbrePerPage
    let nbreOfProd: number;
    if(productsNbrePerPage < limitProductNbrePerPage) {
      nbreOfProd = productsNbrePerPage + step;
      paginationControllers = [false, false, nbreOfProd];
      if(nbreOfProd >= limitProductNbrePerPage) {
        paginationControllers = [true, false, nbreOfProd];
      }
    }
    return paginationControllers;
  }

  decrementNbreOfProducts(productsNbrePerPage: number,
                          step: number
  ): any
  {
    let paginationControllers: Array<boolean | number>;  // 0 index for disableIncrement
                                                         // 1 index for disableDecrement
                                                         // 2 index for productsNbrePerPage
    let nbreOfProd: number;
    if(productsNbrePerPage > step+1) {
      nbreOfProd = productsNbrePerPage - step;
      paginationControllers = [false, false, nbreOfProd];
      if(nbreOfProd <= step){
        paginationControllers = [false, true, nbreOfProd];
      }
    }
    return paginationControllers;
  }

}
