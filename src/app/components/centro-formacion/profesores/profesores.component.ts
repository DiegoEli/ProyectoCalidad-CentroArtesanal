import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit{
  //INICIO INTERFAZ GRÁFICA
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
  }
  llama_asp_beca(){
    this.mostrarPerfil = false;
    this.mostrarAspBeca = true;
    this.mostrarModulo = false;
    this.mostrarNotas = false;
    this.mostrarHorarios = false;
  }
  llama_horarios(){
    this.mostrarPerfil = false;
    this.mostrarAspBeca = false;
    this.mostrarModulo = false;
    this.mostrarNotas = false;
    this.mostrarHorarios = true;
  }
  llama_notas(){
    this.mostrarPerfil = false;
    this.mostrarAspBeca = false;
    this.mostrarModulo = false;
    this.mostrarNotas = true;
    this.mostrarHorarios = false;
  }
  llama_modulo(){
    this.mostrarPerfil = false;
    this.mostrarAspBeca = false;
    this.mostrarModulo = true;
    this.mostrarNotas = false;
    this.mostrarHorarios = false;
  }
  //FIN INTERFAZ GRÁFICA
}
