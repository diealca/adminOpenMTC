import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = "/api/login"

  constructor(private http: HttpClient,
              private _router: Router){}

  loginUser(user) {
    return this.http.post<any>(this._loginUrl,user)
  }

  logoutUser(){
    localStorage.removeItem('token')
    localStorage.removeItem('currentUser')
    localStorage.removeItem('role')
    this._router.navigate(['/login'])
  }

  loggedIn(){
    return localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  getCurrentUser(){
    return localStorage.getItem('currentUser')
  }

  getCurrentRol(){
    return localStorage.getItem('role')
  }
}
