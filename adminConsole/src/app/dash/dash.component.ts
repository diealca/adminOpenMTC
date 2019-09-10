import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  users = false
  devices = false
  monitor = false
  modify = false

  currentUser =""
  currentRol = ""
  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this._authService.getCurrentUser()
    this.currentRol = this._authService.getCurrentRol()
  }

  usersAdmin(){
    this.users = true;
    this.devices = false;
    this.monitor = false;
    this.modify = false;
  }

  devicesAdmin(){
    this.users = false;
    this.devices = true;
    this.monitor = false;
    this.modify = false;
  }

  monitorAdmin(){
    this.users = false;
    this.devices = false;
    this.monitor = true;
    this.modify = false;
  }

  modifyAdmin(){
    this.users = false;
    this.devices = false;
    this.monitor = false;
    this.modify = true;
  }


  logoutUser(){
    this._authService.logoutUser()
  }
}
