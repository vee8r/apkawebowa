import {Injectable} from '@angular/core';

import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs/internal/Observable";
import {Router} from "@angular/router";
import {catchError, throwError} from "rxjs";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService,
              router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 400 && err.error) {

          } else if (err.status === 403) {
            this.auth.logout();

          } else if (err.status === 404) {

          }
          if (err.status === 500) {

          }
          if (err.status === 503) {
            this.auth.logout();
          }
        }
        return throwError(err);

      })
    );
  }
}
