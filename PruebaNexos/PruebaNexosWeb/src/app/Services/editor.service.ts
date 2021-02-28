import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Editorial } from '../Models/editorial';
import { Observable } from 'rxjs';
import { UrlPagina } from '../Models/url-pagina';
@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(private http: HttpClient) { }


  Post(Edi: Editorial): Observable<Editorial> {
    return this.http.post<Editorial>(UrlPagina.Url + "Editorials/Post", Edi);
  }

  Get(): Observable<Editorial[]> {
    return this.http.get<Editorial[]>(UrlPagina.Url + "Editorials/Get");
  }

  Delete(Edi: Editorial): Observable<boolean> {
    return this.http.post<boolean>(UrlPagina.Url + "Editorials/Delete", Edi);
  }

  Update(Edi: Editorial): Observable<Editorial> {
    return this.http.post<Editorial>(UrlPagina.Url + "Editorials/Update", Edi);
  }
}
