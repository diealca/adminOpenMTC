import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  errorMsg=""

  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }

  loginUser(){
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('currentUser',res.user)
          localStorage.setItem('token',res.token)
          localStorage.setItem('role',res.role)
          this._router.navigate(['/dash'])
        },
        err =>{
          console.log (err)
          this.errorMsg=err.error
        }

      )
  }

  clearError(){
    this.errorMsg=""
  }
}
