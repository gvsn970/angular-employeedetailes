import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AllservicesService } from './allservices.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req, next) {
    let authService = this.injector.get(AllservicesService)
    if (authService.getToken() == null) {
      return next.handle(req)
    }

    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'Bearer ' + authService.getToken())
      }
    )
    console.log(tokenizedReq)
    return next.handle(tokenizedReq)

  }
}
