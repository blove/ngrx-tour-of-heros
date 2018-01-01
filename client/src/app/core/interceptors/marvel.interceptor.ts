import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { MarvelService } from "../services/marvel.service";
import { environment } from "../../../environments/environment";

@Injectable()
export class MarvelInterceptor implements HttpInterceptor {

  constructor(private marvelService: MarvelService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.indexOf(this.marvelService.BASE_URL) === 0) {
      request = request.clone({
        params: request.params.set('apikey', environment.marvel.public)
      });
    }
    return next.handle(request);
  }
}
