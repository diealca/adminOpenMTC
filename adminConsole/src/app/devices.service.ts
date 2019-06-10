import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  private _devicesUrl = "/api/devices"

  constructor(private http: HttpClient) { }

  getDevices(){
    return this.http.get<any>(this._devicesUrl)
  }
}
