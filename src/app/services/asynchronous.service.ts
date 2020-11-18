import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AsynchronousService {
  public end_point = environment.END_POINT
  constructor(private http: HttpClient) { }

  httpGet(configUrl: string, paramsArg?: any): any {
    configUrl = `${this.end_point}${configUrl}`
    if (paramsArg) {
      return this.http.get(configUrl, { params: paramsArg });
    } else {
      return this.http.get(configUrl);
    }
  }
}