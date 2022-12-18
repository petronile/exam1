import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) { }

  register(registerForm:any):Observable<any>
  {
   return this._HttpClient.post(`https://dev.lun.sa/Admin/api/register`,registerForm)
  }
  login(loginForm:any):Observable<any>
  {
   return this._HttpClient.post(`https://dev.lun.sa/Admin/api/login`,loginForm)
  }
}
