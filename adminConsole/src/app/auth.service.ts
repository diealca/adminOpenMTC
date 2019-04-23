import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = "/api/login"
  private _httpOptions = {
    headers: new HttpHeaders({
      'Origin':  'console.openmtc.org'
    })
  }
  constructor(private http: HttpClient,
              private _router: Router){}

  loginUser(user) {
    return this.http.post<any>(this._loginUrl,user)
  }

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

  loggedIn(){
    return localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
