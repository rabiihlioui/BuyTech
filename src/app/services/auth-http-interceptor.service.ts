import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthHttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let email = localStorage.getItem('email');
    let token = localStorage.getItem('token');
    if(email && token) {
      req = req.clone({
        setHeaders: {
          Authorization: token
        }
      })
    }
    return next.handle(req);
  }

}
