import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { DevicesService } from '../devices.service';


@Component({
  selector: 'app-moddevices',
  templateUrl: './moddevices.component.html',
  styleUrls: ['./moddevices.component.css']
})
export class ModdevicesComponent implements OnInit {

  constructor(private service: DevicesService,
   ) { }

  listData: MatTableDataSource<any>
  displayedColumns: string[] = [ 'Dispositivo' , 'Comando' , 'Accion' , 'actions' ]

  permissionsDevice={}
  editDevice={}
  showEdit=false
  errorMsg=""
  successMsg=""

  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator

  searchKey: string

  ngOnInit() {
    this.service.getDevicesControl().subscribe(
      res =>{
        this.listData = new MatTableDataSource(res)
        this.listData.sort= this.sort
        this.listData.paginator=this.paginator
      }
    )
  }

  getDevices(){

  }

  enviarAccion(device){


  }

  getType(item){

  }

  deleteDevice(device){

  }

  getUsersOperador(){

  }

}
