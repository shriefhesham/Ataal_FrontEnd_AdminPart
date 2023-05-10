import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  constructor(private _HttpClient:HttpClient) { }

  GetAllProblems():Observable<any>
  {
    return this._HttpClient.get("https://localhost:7273/api/Problem/GetAllProblem")
  }

  GetProblemByID(id:any):Observable<any>
  {
    return this._HttpClient.get(`https://localhost:7273/api/Problem/${id}`)
  }
}
