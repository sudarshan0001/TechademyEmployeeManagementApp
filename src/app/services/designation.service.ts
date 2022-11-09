import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { designation } from '../models/designation';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  constructor(private http:HttpClient) { }

  getDesignations():Observable<designation[]>{
    return this.http.get<designation[]>(`https://localhost:44378/api/Designation/AllDesignations`)
  }

  addDesignation(desObj:any):Observable<Response>{
    return this.http.post<Response>(`https://localhost:44378/api/Designation/AddDesignation`,desObj)
  }

  deleteDesignation(id:any):Observable<Response>{
    return this.http.delete<Response>('https://localhost:44378/api/Designation/DeleteDesignation/'+id)
  }
}
