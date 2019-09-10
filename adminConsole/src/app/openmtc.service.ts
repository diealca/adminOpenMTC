import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenmtcService {

  private _devicesUrl = "/onem2m/~/mn-cse-1/onem2m"

  constructor(private http: HttpClient) { }

  getDevices(){
    return this.http.get<any>(this._devicesUrl+"\?fu=1&lbl=measurements&lbl=commands",{headers:{'X-M2M-Origin':'//console.openmtc.org'}})
  }

}
