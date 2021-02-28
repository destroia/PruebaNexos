import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoresComponent } from './autores/autores.component';
import { EditorialsComponent } from './editorials/editorials.component';
import { LibroComponent } from './libro/libro.component';

const routes: Routes = [
  { path: "", component: EditorialsComponent },
  { path: "Autores", component: AutoresComponent },
  { path: "Libros", component: LibroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
