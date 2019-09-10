import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {


  private _devicesUrl = "/api/dispositivos"

  constructor(private http: HttpClient) { }

  getDevices(){
    return this.http.get<any>(this._devicesUrl)
  }

  getDevicesControl(){
    return this.http.get<any>(this._devicesUrl)
  }

  addDevice(device) {
    return this.http.post<any>(this._devicesUrl,device)
  }

  delteDevice(id){
    return this.http.delete<any>(this._devicesUrl+"/"+id)
  }

  getUsers(id){
    return this.http.get<any>(this._devicesUrl+"/"+id+"/usuarios")
  }
}
