import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Autor } from '../Models/autor';
import { Libro } from '../Models/libro';
import { UrlPagina } from '../Models/url-pagina';
import { LibrosService } from '../Services/libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  errorCrear: boolean = false;
  lookUpdate: boolean = false;
  lookForm: boolean = false;
  formularioLibro: FormGroup;
  lookCrear: boolean = false;
  listaLibros: Libro[];
  auto: Autor;
  ngOnInit(): void {
    this.auto = JSON.parse(sessionStorage.getItem(UrlPagina.SessionStorageAutor));
    if (this.auto == null) {
      this.route.navigate([""]);
    }
    this.InitFormulario();
  }

  constructor(private fb: FormBuilder, private LiService: LibrosService, private route: Router) { }

  InitFormulario() {

    this.formularioLibro = this.fb.group(
      {
        id: ["00000000-0000-0000-0000-000000000000",],
        editorialId: ["",],
        autorId:["",],
        titulo: ["", Validators.required],
        year: [, Validators.required],
        genero: ["", Validators.required],
        numPaginas: [, Validators.required],
       
      });

    this.Load();
  }
  Load() {
    this.LiService.Get(this.auto.id).subscribe(x => { this.LoadEditoriales(x), error => console.log(error) });

  }
  LoadEditoriales(x: Libro[]) {
    this.listaLibros = null;
    this.listaLibros = x;
  }
  

  LookCreate() {
    this.formularioLibro = this.fb.group(
      {
        id: ["00000000-0000-0000-0000-000000000000",],
        editorialId: ["",],
        autorId: ["",],
        titulo: ["", Validators.required],
        year: [, Validators.required],
        genero: ["", Validators.required],
        numPaginas: [, Validators.required],
      });
    this.lookCrear = true;
    this.lookForm = true;
    this.lookUpdate = false;
  }
  CrearEditorial() {
    let L: Libro = this.formularioLibro.value;
    L.editorialId = this.auto.editorialId;
    L.autorId = this.auto.id;
    console.log(L)
    this.LiService.Post(L)

      .subscribe(x => { this.ConfirmacionCreacion(x), x => console.log(x) })


  }
  ConfirmacionCreacion(x: string) {
    if (x == null) {
      alert("No esxiste la editorial")
      this.errorCrear = true;
      this.lookCrear = false;
    }
    
    else {
      alert("Se a creado el elemento");
      this.Load();
      this.formularioLibro = this.fb.group(
        {
          id: ["00000000-0000-0000-0000-000000000000",],
          editorialId: ["",],
          autorId: ["",],
          titulo: ["", Validators.required],
          year: [, Validators.required],
          genero: ["", Validators.required],
          numPaginas: [, Validators.required],
        });
      this.errorCrear = false;
      this.lookCrear = true;
    }
  }
  Eliminar(li: Libro) {
    this.LiService.Delete(li).subscribe(x => { this.ConfirmarEliminacion(x), error => console.log(error) });
  }
  ConfirmarEliminacion(x: boolean) {
    this.Load();
    if (x) {
      alert("Se a eliminado el elemento ");
    } else {
      alert("No se a podido eliminar el elemento");
    }
  }
  Ver(li: Libro) {
    sessionStorage.setItem(UrlPagina.SessionStorageEditor, JSON.stringify(li));
    this.route.navigate(["Autores"])
  }
  Update(li: Libro) {
    this.lookUpdate = true;
    this.lookForm = true;
    this.lookCrear = false;
    console.log(li);

    this.formularioLibro.setValue(li);
  }
  Actualizar() {
    this.LiService.Update(this.formularioLibro.value).subscribe(x => { this.ConfirmacionActua(x), error => console.log(error) });

  } ConfirmacionActua(x: Libro) {
    if (x != null) {
      alert("A actualizado el elemento");
      this.Load();
    } else {
      
    }
   
    }
 LookUpdate() {
    this.lookCrear = false;
    this.lookForm = true;
    this.lookUpdate = true;

  }

}
