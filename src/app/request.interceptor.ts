import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const requestHeaders = new HttpHeaders({ token: 'HAHAHAHAHAHAHAHA' });
    const newRwquest = request.clone({ headers: requestHeaders });
    return next.handle(newRwquest);
  }
}
