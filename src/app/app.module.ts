import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EstudiantesComponent } from './components/centro-formacion/estudiantes/estudiantes.component';
import { DetalleMod1Component } from './components/detalle-mod1/detalle-mod1.component';
import { DetalleMod2Component } from './components/detalle-mod2/detalle-mod2.component';
import { DetalleMod3Component } from './components/detalle-mod3/detalle-mod3.component';
import { EstudiantesNotasComponent } from './components/centro-formacion/estudiantes-notas/estudiantes-notas.component';
import { EstudiantesHorariosComponent } from './components/centro-formacion/estudiantes-horarios/estudiantes-horarios.component';
import { EstudiantesAspiranteBecaComponent } from './components/centro-formacion/estudiantes-aspirante-beca/estudiantes-aspirante-beca.component';
import { EstudiantesPerfilComponent } from './components/centro-formacion/estudiantes-perfil/estudiantes-perfil.component';
import { EstudiantesModuloComponent } from './components/centro-formacion/estudiantes-modulo/estudiantes-modulo.component';
import { ProfesoresComponent } from './components/centro-formacion/profesores/profesores.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    EstudiantesComponent,
    DetalleMod1Component,
    DetalleMod2Component,
    DetalleMod3Component,
    EstudiantesNotasComponent,
    EstudiantesHorariosComponent,
    EstudiantesAspiranteBecaComponent,
    EstudiantesPerfilComponent,
    EstudiantesModuloComponent,
    ProfesoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
