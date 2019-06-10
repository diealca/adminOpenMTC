import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../users.service';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { $ } from 'protractor';

@Component({
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['./adminusers.component.css']
})
export class AdminusersComponent implements OnInit {

  constructor(private usersService: UsersService) { }
  listData: MatTableDataSource<any>
  displayedColumns: string[] = [ 'Usuario' , 'Email' , 'Rol' , 'actions' ]
  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator

  registerUserData = {}
  modifyUserData={}
  passwordVer=""
  errorMsg=""
  successMsg=""

  ngOnInit() {
    this.usersService.getUsers().subscribe(
      res =>{
        this.listData = new MatTableDataSource(res)
        this.listData.sort= this.sort
        this.listData.paginator=this.paginator
      }
    )
  }
  createUser(){
    this.usersService.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log(res)
        this.successMsg="Usuario creado de forma exitosa"
        this.registerUserData={}
        this.passwordVer=""
        this.usersService.getUsers().subscribe(
          res =>{
            this.listData = new MatTableDataSource(res)
            this.listData.sort= this.sort
            this.listData.paginator=this.paginator
          }
        )
      },
      err =>{
        console.log (err)
        this.errorMsg="Error en la creación \n"+err.error.message
      }

    )


  }

  clearMsg(){
    this.errorMsg=""
    this.successMsg=""
  }

  deleteUser(dataUser){
    console.log(dataUser._id)
    this.usersService.deleteUser(dataUser._id)
    .subscribe(
      res => {
        console.log(res)
        this.successMsg="Usuario elimiando de forma exitosa"
        this.usersService.getUsers().subscribe(
          res =>{
            this.listData = new MatTableDataSource(res)
            this.listData.sort= this.sort
            this.listData.paginator=this.paginator
          }
        )
      },
      err =>{
        console.log (err)
        this.errorMsg="Error en la eliminación \n"+err.error.message
      }
    )
  }

  chargeUser(dataUser){
    this.modifyUserData=dataUser
   // $('#modifyUserModal').modal('show')
  }

  modifyUser(){
    this.usersService.modifyUser(this.modifyUserData)
    .subscribe(
      res => {
        console.log(res)
        this.successMsg="Usuario modificado de forma exitosa"
        this.usersService.getUsers().subscribe(
          res =>{
            this.listData = new MatTableDataSource(res)
            this.listData.sort= this.sort
            this.listData.paginator=this.paginator
          }
        )
      },
      err =>{
        console.log (err)
        this.errorMsg="Error en la modificación \n"+err.error.message
      }
    )
  }

  clearUser(){
    this.registerUserData = {}
    this.modifyUserData={}
    this.passwordVer=""
  }
}
