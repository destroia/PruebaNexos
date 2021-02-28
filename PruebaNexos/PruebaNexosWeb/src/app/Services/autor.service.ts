import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from '../Models/autor';
import { UrlPagina } from '../Models/url-pagina';
@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http: HttpClient) { }

  Get(id: string): Observable<Autor[]> {
    return this.http.get<Autor[]>(UrlPagina.Url + "Autors/Get/" + id);
  }

  Post(Aut: Autor): Observable<Autor> {
    return this.http.post<Autor>(UrlPagina.Url + "Autors/Post",Aut)
  }

  Delete(Aut: Autor): Observable<boolean> {
    return this.http.post<boolean>(UrlPagina.Url + "Autors/Delete", Aut);
  }
  Update(Aut: Autor): Observable<Autor> {
    return this.http.post<Autor>(UrlPagina.Url + "Autors/Update", Aut);
  }
}
