import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  private _permissionsUrl = "/api/permisos"

  constructor(private http: HttpClient) { }

  adPermiso(permiso,id) {
    return this.http.post<any>(this._permissionsUrl+"/usuario/"+id,permiso)
  }
}
