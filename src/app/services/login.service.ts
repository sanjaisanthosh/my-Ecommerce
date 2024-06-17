import { Injectable } from '@angular/core';
import { APP_CONSTANT } from './constants/app.constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getShoppingProduct(){
    return this.http.get(`${APP_CONSTANT.SERVICE_BASE_URL}${APP_CONSTANT.API.PRODUCTDETAILS}`)
  }

}
