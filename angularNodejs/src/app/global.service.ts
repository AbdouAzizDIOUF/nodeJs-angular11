import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private urlbase = "http://localhost:5000/api/";
  public headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor() { }

  public getUrlBaseEmployer()
  {
    return this.urlbase;
  }


}
