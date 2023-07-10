import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EstudiantesComponent } from './components/centro-formacion/estudiantes/estudiantes.component';
import { DetalleMod1Component } from './components/detalle-mod1/detalle-mod1.component';
import { DetalleMod2Component } from './components/detalle-mod2/detalle-mod2.component';
import { DetalleMod3Component } from './components/detalle-mod3/detalle-mod3.component';
import { EstudiantesAspiranteBecaComponent } from './components/centro-formacion/estudiantes-aspirante-beca/estudiantes-aspirante-beca.component';
import { EstudiantesHorariosComponent } from './components/centro-formacion/estudiantes-horarios/estudiantes-horarios.component';
import { EstudiantesModuloComponent } from './components/centro-formacion/estudiantes-modulo/estudiantes-modulo.component';
import { EstudiantesNotasComponent } from './components/centro-formacion/estudiantes-notas/estudiantes-notas.component';
import { EstudiantesPerfilComponent } from './components/centro-formacion/estudiantes-perfil/estudiantes-perfil.component';
import { ProfesoresComponent } from './components/centro-formacion/profesores/profesores.component';

const routes: Routes = [
  { path: '', redirectTo:  'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'estudiantes', component: EstudiantesComponent},
  { path: 'detalle-mod1', component: DetalleMod1Component},
  { path: 'detalle-mod2', component: DetalleMod2Component},
  { path: 'detalle-mod3', component: DetalleMod3Component},
  { path: 'estudiantes-aspirante-beca', component: EstudiantesAspiranteBecaComponent},
  { path: 'estudiantes-horarios', component: EstudiantesHorariosComponent},
  { path: 'estudiantes-modulo', component: EstudiantesModuloComponent},
  { path: 'estudiantes-notas', component: EstudiantesNotasComponent},
  { path: 'estudiantes-perfil', component: EstudiantesPerfilComponent},
  { path: 'profesores', component: ProfesoresComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
