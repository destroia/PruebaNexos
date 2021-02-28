import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Editorial } from '../Models/editorial';
import { UrlPagina } from '../Models/url-pagina';
import { EditorService } from '../Services/editor.service';

@Component({
  selector: 'app-editorials',
  templateUrl: './editorials.component.html',
  styleUrls: ['./editorials.component.css']
})
export class EditorialsComponent implements OnInit {
  errorCrear: boolean = false;
  lookUpdate: boolean = false;
  lookForm: boolean = false;
  formularioEditorial: FormGroup;
  lookCrear: boolean = false;
  listaEditoriales: Editorial[];
  editoCrear: Editorial;
  constructor(private fb: FormBuilder, private EdiService: EditorService, private route: Router) { }

  InitFormulario() {
    this.formularioEditorial = this.fb.group(
      {
        id: ["", ],
        nombre: ["", Validators.required],
        direccion: ["", Validators.required],
        email: ["", Validators.required],
        maxLibros: [, Validators.required],
        numLibros: [0,],
        libros: [,],
        autores: [,]
      });

    this.Load();
  }
    Load() {
      this.EdiService.Get().subscribe(x => { this.LoadEditoriales(x), error => console.log(error) });

    }
  LoadEditoriales(x: Editorial[]) {
    this.listaEditoriales = null;
      this.listaEditoriales = x;
    }
  ngOnInit(): void {
    this.InitFormulario();
  }

  LookCreate() {
    this.formularioEditorial = this.fb.group(
      {
        id: ["",],
        nombre: ["", Validators.required],
        direccion: ["", Validators.required],
        email: ["", Validators.required],
        maxLibros: [, Validators.required],
        numLibros: [0,],
        libros: [,],
        autores: [,]
      });
    this.lookCrear = true;
    this.lookForm = true;
    this.lookUpdate = false;
  }
  CrearEditorial() {
    this.editoCrear = this.formularioEditorial.value;
    this.editoCrear.id = "00000000-0000-0000-0000-000000000000";
    console.log(this.formularioEditorial.value)
    this.EdiService.Post(this.formularioEditorial.value)

      .subscribe(x => { this.ConfirmacionCreacion(x), x => console.log(x) })

   
  }
   ConfirmacionCreacion(x: any) {
     if (x != null) {
       this.formularioEditorial = this.fb.group(
         {
           id: ["",],
           nombre: ["", Validators.required],
           direccion: ["", Validators.required],
           email: ["", Validators.required],
           maxLibros: [, Validators.required],
           numLibros: [0,],
           libros: [,],
           autores: [,]
         });
        this.errorCrear = false;
        this.lookCrear = false;
        this.Load();
      } else {
        this.errorCrear = true;
      }
  }
  Eliminar(li: Editorial) {
    this.EdiService.Delete(li).subscribe(x => { this.ConfirmarEliminacion(x), error => console.log(error) });
  }
  ConfirmarEliminacion(x: boolean) {
    this.Load();
      if (x) {
        alert("Se a eliminado el elemento ");
      } else {
        alert("No se a podido eliminar el elemento");
      }
  }
  Ver(li: Editorial) {
    sessionStorage.setItem(UrlPagina.SessionStorageEditor, JSON.stringify(li));
    this.route.navigate(["Autores"])
  }
  Update(li: Editorial) {
    this.lookUpdate = true;
    this.lookForm = true;
    this.lookCrear = false;
    console.log(li);
    
    this.formularioEditorial.setValue(li);
  }
  Actualizar() {
    this.EdiService.Update(this.formularioEditorial.value)
      .subscribe(x => { this.ConfirmacionActualizacion(x), error => console.log(error) });

  } ConfirmacionActualizacion(x: Editorial) {
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
