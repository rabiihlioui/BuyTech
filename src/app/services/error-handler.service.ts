import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  handleError(errorResponse: HttpErrorResponse) {
/*     if(errorResponse.error instanceof ErrorEvent) {
      console.log('Client Side Error : ', errorResponse.error.message);
    }
    else {
      console.log('Server Side Error : ', errorResponse.error.message);
    } */

    return throwError(errorResponse.error.message);
  }

}
