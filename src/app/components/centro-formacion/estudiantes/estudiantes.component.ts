import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit{
  //INICIO INTERFAZ GRÁFICA
  mostrarBienvenida = true;
  mostrarAspBeca = false;
  mostrarPerfil = false;
  mostrarModulo = false;
  mostrarNotas = false;
  mostrarHorarios = false;

  constructor(private router: Router){}

  ngOnInit(): void {}

  llama_perfil_estudiante() {
    this.mostrarPerfil = true;
    this.mostrarAspBeca = false;
    this.mostrarModulo = false;
    this.mostrarNotas = false;
    this.mostrarHorarios = false;
    this.mostrarBienvenida = false;
  }
  llama_asp_beca(){
    this.mostrarPerfil = false;
    this.mostrarAspBeca = true;
    this.mostrarModulo = false;
    this.mostrarNotas = false;
    this.mostrarHorarios = false;
    this.mostrarBienvenida = false;
  }
  llama_horarios(){
    this.mostrarPerfil = false;
    this.mostrarAspBeca = false;
    this.mostrarModulo = false;
    this.mostrarNotas = false;
    this.mostrarHorarios = true;
    this.mostrarBienvenida = false;
  }
  llama_notas(){
    this.mostrarPerfil = false;
    this.mostrarAspBeca = false;
    this.mostrarModulo = false;
    this.mostrarNotas = true;
    this.mostrarHorarios = false;
    this.mostrarBienvenida = false;
  }
  llama_modulo(){
    this.mostrarPerfil = false;
    this.mostrarAspBeca = false;
    this.mostrarModulo = true;
    this.mostrarNotas = false;
    this.mostrarHorarios = false;
    this.mostrarBienvenida = false;
  }
  //FIN INTERFAZ GRÁFICA
}
