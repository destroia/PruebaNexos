import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FechaFormatCService {

  constructor() { }

  static Fecha(fecha: string) {
    return fecha + "T00:00:00";
  }

}
