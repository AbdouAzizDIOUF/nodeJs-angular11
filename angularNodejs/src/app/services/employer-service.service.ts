import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {GlobalService} from '../global.service';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployerServiceService {

  constructor(private http: HttpClient, private globalService:GlobalService) { }

  public onGetAllEmployes(){
    return this.http.get(this.globalService.getUrlBaseEmployer());
  }

  public onGetEmplyerById(employer:any){
    return this.http.get(this.globalService.getUrlBaseEmployer()+"read/"+employer);
  }

  public onCreateEmployer(employer:any){
    return this.http.post(this.globalService.getUrlBaseEmployer()+"create", employer);
  }

  public onUpdateEmployer(employer:any){
      return this.http.put(this.globalService.getUrlBaseEmployer()+"update/"+employer._id, employer);
  }

  public onRemoveEmploye(employer: any){
    return this.http.delete(this.globalService.getUrlBaseEmployer()+"delete/"+employer._id);
  }



  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
