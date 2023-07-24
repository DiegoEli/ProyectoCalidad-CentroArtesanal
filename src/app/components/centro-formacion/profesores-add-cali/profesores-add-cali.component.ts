import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CalificacionesModel } from 'src/app/shared/calificaciones.model';
import { CalificacionesService } from 'src/app/shared/calificaciones.service';

@Component({
  selector: 'app-profesores-add-cali',
  templateUrl: './profesores-add-cali.component.html',
  styleUrls: ['./profesores-add-cali.component.css']
})
export class ProfesoresAddCaliComponent implements OnInit {

  calificaciones: Observable<CalificacionesModel[]> | undefined
  id = '';
  calificacion = new CalificacionesModel('', '', '', '', '', '', '', '');
  //perfilEstudiantes: PerfilEstudianteModel[] = [];
  //modulos: ModuloModel[] = [];
  //asignaturas: AsignaturaModel[] = [];

  constructor(
    private calificacionesService: CalificacionesService,
    //private perfilEstudianteService: PerfilEstudianteService,
    //private moduloService: ModuloService,
    //private asignaturaService: AsiganturaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log('EDITAR');
      this.calificacionesService.obtenerCalificacion(this.id).subscribe({
        next: (data: CalificacionesModel[]) => {
          this.calificacion = data[0];
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } else {
      console.log('CREAR');
    }
    // this.obtenerPerfilEstudiantes();
    // this.obtenerModulos();
    // this.obtenerAsignaturas();
    this.calificaciones = this.calificacionesService.obtenerCalificaciones();
  }

  // obtenerPerfilEstudiantes() {
  //   this.perfilEstudianteService.obtenerPerfilEstudiantes().subscribe({
  //     next: (data: PerfilEstudianteModel[]) => {
  //       this.perfilEstudiantes = data;
  //     },
  //     error: (error: any) => {
  //       console.log(error);
  //     }
  //   });
  // }

  // obtenerModulos() {
  //   this.moduloService.obtenerModulos().subscribe({
  //     next: (data: ModuloModel[]) => {
  //       this.modulos = data;
  //     },
  //     error: (error: any) => {
  //       console.log(error);
  //     }
  //   });
  // }

  // obtenerAsignaturas() {
  //   this.asignaturaService.obtenerAsignaturas().subscribe({
  //     next: (data: AsignaturaModel[]) => {
  //       this.asignaturas = data;
  //     },
  //     error: (error: any) => {
  //       console.log(error);
  //     }
  //   });
  // }

  borrarCalificacion(id: string) {
    if (confirm('¿Estás seguro de eliminar?')) {
      this.calificacionesService.borrarCalificacion(id).subscribe(data => {
        console.log(data);
        this.calificaciones = this.calificacionesService.obtenerCalificaciones();
      });
    }
  }

  onSubmit() {
    if (this.calificacion.idcalificaciones !== '') {
      this.calificacionesService.actualizarCalificacion(this.calificacion).subscribe(
        (data: any) => {
          alert(data);
          console.log(data);
          this.router.navigate(['/calificaciones']);
        },
        (error: any) => {
          console.log('Error al actualizar la calificacion:', error);
        }
      );
      console.log('se editó ...');
    } else {
      console.log('crear');
      this.calificacionesService.agregarCalificacion(this.calificacion).subscribe({
        next: (data: any) => {
          alert(data);
          this.router.navigate(['/calificaciones']);
        },
        error: (error: any) => {
          console.log('Error al agregar la calificacion:', error);
        }
      });
      console.log('se creó ...');
    }
  }

}
