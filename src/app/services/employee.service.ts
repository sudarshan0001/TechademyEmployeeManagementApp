import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { employee } from '../models/employee';
import { result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 // response : string ='';

  constructor(private http: HttpClient) { }

  employeeDetails():Observable<employee[]>{
    return this.http.get<employee[]>(`https://localhost:44378/api/Employee/AllEmployee`)
  }

  login(loginObj: any): Observable<result[]>{
    return this.http.post<result[]>(`https://localhost:44378/api/Employee/Login`,loginObj)
  }

  addEmp(empObj: any):Observable<Response>{
    return this.http.post<Response>(`https://localhost:44378/api/Employee/AddEmployee`,empObj)
  }

  deleteEmp(id: any):Observable<Response>{
    return this.http.delete<Response>('https://localhost:44378/api/Employee/DeleteEmployee/'+id)
  }
}
