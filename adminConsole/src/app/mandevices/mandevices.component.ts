import { Component, OnInit, ViewChild } from '@angular/core';
import { DevicesService } from '../devices.service';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';

@Component({
  selector: 'app-mandevices',
  templateUrl: './mandevices.component.html',
  styleUrls: ['./mandevices.component.css']
})
export class MandevicesComponent implements OnInit {

  constructor(private service: DevicesService) { }
  listData: MatTableDataSource<any>
  displayedColumns: string[] = [ 'Usuario' , 'Email' , 'Rol' , 'actions' ]
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

}
