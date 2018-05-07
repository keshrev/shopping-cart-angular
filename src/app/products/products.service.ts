import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AjaxHandler } from '../app-utilities/ajax-handler';
import { RestEndPoint } from '../app-utilities/app-properties';
// import { AppUtility } from '../app-utilities/app-utility';

@Injectable()
export class ProductsService {

  constructor(public http: HttpClient) { }

// API call to fetch all the Products
  public getProductsList(urlParams?: any): Observable<any> {
    return this.http.get(RestEndPoint + '/products')
      .map(AjaxHandler.extractData)
      .catch(AjaxHandler.handleError);
  }

  // API call to add or remove products from cart.
  public updateProductToCart(urlParams?: any): Observable<any> {
    // AppUtility.setHttpParams(urlParams)
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    return this.http.put(RestEndPoint + '/products-update/' + urlParams.id + '/' + urlParams.status, options)
      .map(AjaxHandler.extractData)
      .catch(AjaxHandler.handleError);
  }
}
