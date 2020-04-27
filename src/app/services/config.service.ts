import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IConfig } from '../models/config.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl: string = `${environment.apiUrl}config.json`;

  constructor(private _http: HttpClient) { }

  getConfig(): Observable<IConfig> {
    return this._http.get<IConfig>(this.configUrl);
  }
}
