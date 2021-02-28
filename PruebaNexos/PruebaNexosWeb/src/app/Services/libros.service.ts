import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../Models/libro';
import { UrlPagina } from '../Models/url-pagina';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClient) { }

  Get(id: string): Observable<Libro[]> {
    return this.http.get<Libro[]>(UrlPagina.Url + "Libros/Get/" + id)
  }
  Post(li : Libro): Observable<string> {
    return this.http.post<string>(UrlPagina.Url + "Libros/Post", li);
  }

  Update(li: Libro): Observable<Libro> {
    return this.http.post<Libro>(UrlPagina.Url + "Libros/Update", li);
  }

  Delete(li: Libro): Observable<boolean> {
    return this.http.post<boolean>(UrlPagina.Url + "Libros/Delete", li);
  }
  
}
