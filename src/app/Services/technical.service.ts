import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnicalService {

  constructor(private _HttpClient:HttpClient) { }

  GetAllTechnical():Observable<any>
  {
    return this._HttpClient.get("https://localhost:7273/api/Technical")
  }

  GetTechnicalbyID(id:any):Observable<any>
  {
    return this._HttpClient.get(`https://localhost:7273/api/Technical/TechnicalProfile/${id}`)
  }
  
  DeleteTechnical(id: number): Observable<HttpResponse<any>> {
    return this._HttpClient.delete(`https://localhost:7273/api/Technical/Delete/${id}`, { observe: 'response' });
  }
}
