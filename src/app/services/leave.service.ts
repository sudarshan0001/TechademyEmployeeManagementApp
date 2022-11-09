import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { leave } from '../models/leave';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http:HttpClient) { }

  leaveRequest(leaveObj: any):Observable<Response>{
    return this.http.post<Response>('https://localhost:44378/api/Leave/Request-Leave',leaveObj)
  }

  leaveHistory(id:any):Observable<leave[]>{
    return this.http.get<leave[]>('https://localhost:44378/api/Leave/emp-leaves/'+id)
  }

}

