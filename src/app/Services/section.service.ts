import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private _HttpClient:HttpClient) { }
  private apiUrl = 'https://localhost:7273/api/Section';
  GetAllSectionWithoutDetails():Observable<any>
  {
    return this._HttpClient.get("https://localhost:7273/api/Section/AllSectionWithoutDetails")
  }

  GetAllSectionWithDetails_Customer():Observable<any>
  {
    return this._HttpClient.get("https://localhost:7273/api/Section/AllSectionWithDetails_Customer")
  }

  GetSectionDetailsByID(id:number):Observable<any>
  {
    return this._HttpClient.get(`https://localhost:7273/api/Section/GetSectionByID?id=${id}`)
  }

  GetSectionDetailsByIDWithDetails(id:number):Observable<any>
  {
    return this._HttpClient.get(`https://localhost:7273/api/Section/GetSectionWithDetails?id=${id}`)
  }

  UpdateSection(id:number , section:any):Observable<any>
  {
    const url =`https://localhost:7273/api/Section/UpdateSection?id=${id}`;
    return this._HttpClient.put(url,section)
  }

  DeleteSection(id: number): Observable<HttpResponse<any>> {
    return this._HttpClient.delete(`https://localhost:7273/api/Section/DeleteSection?id=${id}`, { observe: 'response' });
  }
  
  // AddSection(section: any): Observable<any> {
  //   const url = `https://localhost:7273/api/Section/AddSection`;
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const options = { headers: headers };
  //   return this._HttpClient.post(url, section, options);
  // }

  // AddSection(id: string, Name: string, Description: string, image: string): Observable<any> {
  //   const formData = new FormData();
  //   formData.append('id', id);
  //   formData.append('Name', Name);
  //   formData.append('Description', Description);
  //   formData.append('image', image);

  //   console.log('Form data:', formData);
  //   return this._HttpClient.post<any>(`${this.apiUrl}/AddSection`, formData);
  // }

  addSection(formData: FormData): Observable<any> {
    return this._HttpClient.post<any>(`${this.apiUrl}/AddSection`, formData);
  }
}

