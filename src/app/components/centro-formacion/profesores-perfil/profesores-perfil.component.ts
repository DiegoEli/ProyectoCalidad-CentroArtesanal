import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PerfilDocenteModel } from 'src/app/shared/perfil-docente.model';
import { PerfilDocenteService } from 'src/app/shared/perfil-docente.service';

@Component({
  selector: 'app-profesores-perfil',
  templateUrl: './profesores-perfil.component.html',
  styleUrls: ['./profesores-perfil.component.css']
})
export class ProfesoresPerfilComponent implements OnInit{

  profesores: Observable<PerfilDocenteModel[]> | undefined

  constructor(
    private perfilDocenteService: PerfilDocenteService,
  ) {}

  ngOnInit(): void {
    this.profesores = this.perfilDocenteService.obtenerPerfilDocentes();
  }
  
}
