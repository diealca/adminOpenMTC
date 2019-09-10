import { Component, OnInit, ViewChild } from '@angular/core';
import { DevicesService } from '../devices.service';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { OpenmtcService } from '../openmtc.service';
import { UsersService } from '../users.service';
import { PermissionsService } from '../permissions.service';


@Component({
  selector: 'app-mandevices',
  templateUrl: './mandevices.component.html',
  styleUrls: ['./mandevices.component.css']
})
export class MandevicesComponent implements OnInit {

  constructor(private service: DevicesService,
              private openmtcService: OpenmtcService,
              private permissionsService: PermissionsService,
              private usersService: UsersService) { }
  listData: MatTableDataSource<any>
  listDevices: MatTableDataSource<any>
  listUsers: MatTableDataSource<any>
  listOperadores: MatTableDataSource<any>
  displayedColumns: string[] = [ 'Dispositivo' , 'Tipo' , 'Descripcion' , 'actions' ]
  displayedUsers: string[] = [ 'Usuario' , 'Permiso', 'actions' ]
  permissionsDevice={}
  editDevice={}
  showEdit=false
  errorMsg=""
  successMsg=""

  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator

  searchKey: string

  ngOnInit() {
    this.service.getDevices().subscribe(
      res =>{
        this.listData = new MatTableDataSource(res)
        this.listData.sort= this.sort
        this.listData.paginator=this.paginator
      }
    )
  }

  getDevices(){
    this.openmtcService.getDevices().subscribe(
      res =>{
        let array=res['m2m:uril'].map(item=>{
          let splitItem=item.split('/')
          return{
            'urilDispositivo':item,
            'dispositivo':splitItem[5],
            'tipo': this.getType(splitItem[6]),
            'descripcion':''
          }
        },
        err =>{
          console.log (err)
          this.errorMsg="Error en la creación \n"+err.error.message
        }
        )

        this.listDevices = new MatTableDataSource(array)
      }
    )
  }

  addDevice(device){
    console.log(device)
    this.service.addDevice(device).subscribe(
      res => {
        console.log(res)
        this.successMsg="Dispositivo adicionado de forma exitosa"
      },
      err =>{
        console.log (err)
        this.errorMsg="Error adicionar dispositivo \n"+err.error.message
      }
    )

  }

  getType(item){
    if(item==="measurements"){
      return "sensor"
    }else
      if(item==="commands"){
      return "actuador"
      }
      else{
        return ""
      }
  }

  deleteDevice(device){
    console.log(device)
    this.service.delteDevice(device._id).subscribe(
      res => {
        console.log(res)
        this.successMsg="Dispositivo eliminado de forma exitosa"
        this.service.getDevices().subscribe(
          res =>{
            this.listData = new MatTableDataSource(res)
            this.listData.sort= this.sort
            this.listData.paginator=this.paginator
          }
        )
      },
      err =>{
        console.log (err)
        this.errorMsg="Error al eliminar el dispositivo \n"+err.error.message
      }
    )
  }

  editPermissions(device){
    this.editDevice=device
    console.log(this.editDevice)
    this.showEdit=true
    this.service.getUsers(device._id).subscribe(
      res => {
        console.log(res)
        this.listUsers = new MatTableDataSource(res)
      },
      err =>{
        console.log (err)
      }
    )
  }

  getUsersOperador(){
    this.usersService.getUsersOperador().subscribe(
      res => {
        this.listOperadores = new MatTableDataSource(res)
      },
      err =>{
        console.log (err)
      }
    )
  }
  addPermiso(usuarioPermiso){
    let permiso={}
    permiso['tipo']=usuarioPermiso.permiso
    permiso['device']=this.editDevice['_id']
    this.permissionsService.adPermiso(permiso,usuarioPermiso['_id']).subscribe(
      res =>{
        console.log (res)
    },
    err =>{
      console.log (err)
    }
    )
  }

  clearMsg(){
    this.errorMsg=""
    this.successMsg=""
  }
}
