import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { workingHour } from '../models/working-hour';

@Injectable({
  providedIn: 'root'
})
export class WorkingHoursService {

  constructor(private http:HttpClient) { }

  getWorkingHours(id:any):Observable<workingHour[]>{
    return this.http.get<workingHour[]>('https://localhost:44378/api/WorkingHour/Details/'+id)
  }

  addWorkingHours(hourObj:any):Observable<Response>{
    return this.http.post<Response>('https://localhost:44378/api/WorkingHour/Add-Details',hourObj)
  }

}
