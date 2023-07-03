import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DocentesComponent } from './components/centro-formacion/docentes/docentes.component';
import { EstudiantesComponent } from './components/centro-formacion/estudiantes/estudiantes.component';
import { DetalleMod1Component } from './components/detalle-mod1/detalle-mod1.component';
import { DetalleMod2Component } from './components/detalle-mod2/detalle-mod2.component';
import { DetalleMod3Component } from './components/detalle-mod3/detalle-mod3.component';

const routes: Routes = [
  { path: '', redirectTo:  'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'docentes', component: DocentesComponent},
  { path: 'estudiantes', component: EstudiantesComponent},
  { path: 'detalle-mod1', component: DetalleMod1Component},
  { path: 'detalle-mod2', component: DetalleMod2Component},
  { path: 'detalle-mod3', component: DetalleMod3Component},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
