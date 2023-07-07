import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(!req.url.endsWith('/api/users/login') || !req.url.endsWith('/api/users/register')){
      let accessToken = localStorage.getItem('accessToken')
      const modifiedReq = req.clone({ 
        headers: req.headers.set('Authorization', `Bearer ${accessToken}`).set('Access-Control-Allow-Origin', '*')    });
      return next.handle(modifiedReq);
    }
  }
}
