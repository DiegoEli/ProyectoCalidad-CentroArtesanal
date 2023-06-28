import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DocentesComponent } from './components/centro-formacion/docentes/docentes.component';
import { EstudiantesComponent } from './components/centro-formacion/estudiantes/estudiantes.component';

const routes: Routes = [
  { path: '', redirectTo:  'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'docentes', component: DocentesComponent},
  { path: 'estudiantes', component: EstudiantesComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
