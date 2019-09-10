import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _usersUrl = "/api/usuarios"

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<any>(this._usersUrl)
  }

  registerUser(userData){
    return this.http.post<any>(this._usersUrl,userData)
  }

  deleteUser(id){
    return this.http.delete<any>(this._usersUrl+"/"+id)
  }

  modifyUser(userData){
    return this.http.put<any>(this._usersUrl+"/"+userData._id,userData)
  }

  getUsersOperador(){
    return this.http.get<any>(this._usersUrl+"/operador")
  }
}
