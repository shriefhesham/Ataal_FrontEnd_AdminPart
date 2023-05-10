import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private _HttpClient:HttpClient) { }

  GetAllReports():Observable<any>
  {
    return this._HttpClient.get("https://localhost:7273/api/Report")
  }

  GetReportByID(id :any):Observable<any>
  {
    return this._HttpClient.get(`https://localhost:7273/api/Report/${id}`)
  }

  
  DeleteReport(id: number): Observable<HttpResponse<any>> {
    return this._HttpClient.delete(`https://localhost:7273/api/Report/${id}`, { observe: 'response' });
  }

}
