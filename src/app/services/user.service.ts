import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUserHttp } from '../models/http-models/user-http.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl: string = `${environment.apiUrl}users.json`;

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<any> {
    return this._http.get<IUserHttp>(this.userUrl);
  }

}
