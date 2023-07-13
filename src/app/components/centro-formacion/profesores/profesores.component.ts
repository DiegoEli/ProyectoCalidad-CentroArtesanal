import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit{
  //INICIO INTERFAZ GRÁFICA
  mostrarBienvenida = true;
  mostrarHorarioDocente = false;
  mostrarSalario = false;
  mostrarPerfilDocente = false;
  mostrarIngCalificaciones = false;

  constructor(private router: Router){}

  ngOnInit(): void {}

  llama_horario_docente() {
    this.mostrarBienvenida = false;
    this.mostrarHorarioDocente = true;
    this.mostrarSalario = false;
    this.mostrarPerfilDocente = false;
    this.mostrarIngCalificaciones = false;
  }
  llama_salario(){
    this.mostrarBienvenida = false;
    this.mostrarHorarioDocente = false;
    this.mostrarSalario = true;
    this.mostrarPerfilDocente = false;
    this.mostrarIngCalificaciones = false;
  }
  llama_perfil_docente(){
    this.mostrarBienvenida = false;
    this.mostrarHorarioDocente = false;
    this.mostrarSalario = false;
    this.mostrarPerfilDocente = true;
    this.mostrarIngCalificaciones = false;
  }
  llama_ingreso_calificaciones(){
    this.mostrarBienvenida = false;
    this.mostrarHorarioDocente = false;
    this.mostrarSalario = false;
    this.mostrarPerfilDocente = false;
    this.mostrarIngCalificaciones = true;
  }//FIN INTERFAZ GRÁFICA
}
