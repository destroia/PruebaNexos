import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cwd } from 'process';
import { Autor } from '../Models/autor';
import { Editorial } from '../Models/editorial';
import { UrlPagina } from '../Models/url-pagina';
import { AutorService } from '../Services/autor.service';
import { EditorService } from '../Services/editor.service';
import { FechaFormatCService } from '../Services/fecha-format-c#.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {
  formularioAutor: FormGroup;
  errorCrear: boolean = false;
  lookUpdate: boolean = false;
  lookForm: boolean = false;
  lookCrear: boolean = false;
  editorial: Editorial;
  listaAutores: Autor[];
  listaEditores: Editorial[];
  e: Autor;
  constructor(private fb: FormBuilder, private autorSevice: AutorService, private route: Router,private EditorService : EditorService) { }

  ngOnInit(): void {
    this.editorial = JSON.parse(sessionStorage.getItem(UrlPagina.SessionStorageEditor));
    if (this.editorial == null) {
      this.route.navigate([""])
    } else {

    }
    this.InitFormulario();
  }
  InitFormulario() {

    this.formularioAutor = this.fb.group(
      {
        id: ["",],
        nombre: ["", Validators.required],
        ciudad: ["", Validators.required],
        email: ["", Validators.required],
        editorialId: ["", Validators.required],
        fecha: ["", Validators.required],
        
      });
    this.Load();
    this.EditorService.Get().subscribe(x => { console.log(this.listaEditores = x), error => console.log(error) });

  }
  Load() {
    console.log(this.editorial.id)
    this.autorSevice.Get(this.editorial.id).subscribe(x => { this.LoadAutores(x), error => console.log(error) });

  }
  LoadAutores(x: Autor[]) {
    this.listaAutores = null;
    this.listaAutores = x;
  }
  

  LookCreate() {
    this.formularioAutor = this.fb.group(
      {
        id: ["",],
        nombre: ["", Validators.required],
        ciudad: ["", Validators.required],
        email: ["", Validators.required],
        editorialId: ["", Validators.required],
        fecha: ["", Validators.required],
      });
    this.lookCrear = true;
    this.lookForm = true;
    this.lookUpdate = false;
  }
  CrearEditorial() {
   
    this.e =this.formularioAutor.value;
    this.e.fecha += "T00:00:00";// FechaFormatCService.Fecha(e.fecha);
    this.e.id = "00000000-0000-0000-0000-000000000000";
   
    this.autorSevice.Post(this.e)

      .subscribe(x => { this.ConfirmacionCreacion(x) , x => console.log(x) })

    
  }
  ConfirmacionCreacion(x: Autor) {
    console.log(x)
    this.e.fecha = this.e.fecha.substring(0, 10);
    if (x == null) {
      this.errorCrear = false;
      this.lookCrear = false;
    } else {
      this.errorCrear = true;
    }
  }
  Eliminar(li: Autor) {
    this.autorSevice.Delete(li).subscribe(x => { this.ConfirmarEliminacion(x), error => console.log(error) });
  }
  ConfirmarEliminacion(x: boolean) {
    this.Load();
    if (x) {
      alert("Se a eliminado el elemento ");
    } else {
      alert("No se a podido eliminar el elemento");
    }
  }
  Ver(li: Autor) {
    sessionStorage.setItem(UrlPagina.SessionStorageAutor, JSON.stringify(li));
    this.route.navigate(["Libros"])
  }
  Update(li: Autor) {
    this.lookUpdate = true;
    this.lookForm = true;
    this.lookCrear = false;
    li.fecha = li.fecha.substring(0, 10);
    console.log(li);
    this.formularioAutor.setValue(li);
  }
  Actualizar() {
    this.autorSevice.Update(this.formularioAutor.value)
      .subscribe(x => { this.ConfirmacionActualizacion(x), error => console.log(error) });

  }ConfirmacionActualizacion(x: Autor) {
    if (x == null) {
      alert("Algo inesperado sucedio ");
    } else {
      alert("se a actualizado el elemento")
      this.Load();
    }
  }
 LookUpdate() {
    this.lookCrear = false;
    this.lookForm = true;
    this.lookUpdate = true;

  }
}
