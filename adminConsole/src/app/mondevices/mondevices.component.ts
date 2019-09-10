import { Component, OnInit, ViewChild } from '@angular/core';
import { DevicesService } from '../devices.service';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { OpenmtcService } from '../openmtc.service';
import { UsersService } from '../users.service';
import { PermissionsService } from '../permissions.service';

@Component({
  selector: 'app-mondevices',
  templateUrl: './mondevices.component.html',
  styleUrls: ['./mondevices.component.css']
})
export class MondevicesComponent implements OnInit {

  constructor(private service: DevicesService) { }

  listData: MatTableDataSource<any>
  displayedColumns: string[] = [ 'Dispositivo' , 'Comando' , 'Accion' ]

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

}
