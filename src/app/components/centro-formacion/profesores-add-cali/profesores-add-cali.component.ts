import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CalificacionesModel } from 'src/app/shared/calificaciones.model';
import { CalificacionesService } from 'src/app/shared/calificaciones.service';
import { AsignaturaModel } from 'src/app/shared/asignatura.model';
import { AsignaturaService } from 'src/app/shared/asignatura.service';
import { ModuloModel } from 'src/app/shared/modulo.model';
import { ModuloService } from 'src/app/shared/modulo.service';
import { PerfilEstudianteModel } from 'src/app/shared/perfil-estudiante.model';
import { PerfilEstudianteService } from 'src/app/shared/perfil-estudiante.service';

@Component({
  selector: 'app-profesores-add-cali',
  templateUrl: './profesores-add-cali.component.html',
  styleUrls: ['./profesores-add-cali.component.css']
})
export class ProfesoresAddCaliComponent implements OnInit {

  calificaciones: Observable<CalificacionesModel[]> | undefined
  id = '';
  calificacion = new CalificacionesModel('', '', '', '', '', '', '', '');
  perfil_estudiantes: PerfilEstudianteModel[] = [];
  asignaturas: AsignaturaModel[] = [];
  modulos: ModuloModel[] = [];

  constructor(
    private calificacionesService: CalificacionesService,
    private perfilEstudianteService: PerfilEstudianteService,
    private asignaturaService: AsignaturaService,
    private moduloService: ModuloService,
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
    this.obtenerPerfilEstudiantes();
    this.obtenerModulos();
    this.obtenerAsignaturas();
    this.calificaciones = this.calificacionesService.obtenerCalificaciones();

    this.perfilEstudianteService.obtenerPerfilEstudiantes().subscribe(
      (perfil_estudiantes: PerfilEstudianteModel[]) => {
        this.perfil_estudiantes = perfil_estudiantes; // Almacena las asignaturas en el arreglo local
      }
    );

    this.asignaturaService.obtenerAsignaturas().subscribe(
      (asignaturas: AsignaturaModel[]) => {
        this.asignaturas = asignaturas; // Almacena las asignaturas en el arreglo local
      }
    );

    this.moduloService.obtenerModulos().subscribe(
      (modulos: ModuloModel[]) => {
        this.modulos = modulos; // Almacena las modulos en el arreglo local
      }
    );

  }

  obtenerPerfilEstudiantes() {
    this.perfilEstudianteService.obtenerPerfilEstudiantes().subscribe({
      next: (data: PerfilEstudianteModel[]) => {
        this.perfil_estudiantes = data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  obtenerModulos() {
    this.moduloService.obtenerModulos().subscribe({
      next: (data: ModuloModel[]) => {
        this.modulos = data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  obtenerAsignaturas() {
    this.asignaturaService.obtenerAsignaturas().subscribe({
      next: (data: AsignaturaModel[]) => {
        this.asignaturas = data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  obtenerNombrePerfilEstudiante(idPerfil_estudiante: string): string {
    const perfil_estudiante = this.perfil_estudiantes.find(est => est.idperfil_estudiante === idPerfil_estudiante);
    return perfil_estudiante ? perfil_estudiante.nombre : '¡Perfil estudiante no encontrado!';
  }

  obtenerNombreAsignatura(idAsignatura: string): string {
    const asignatura = this.asignaturas.find(asig => asig.idasignatura === idAsignatura);
    return asignatura ? asignatura.nombre_asignatura : '¡Asignatura no encontrada!';
  }

  obtenerNombreModulo(idModulo: string): string {
    const modulo = this.modulos.find(modu => modu.idmodulo === idModulo);
    return modulo ? modulo.nombre_modulo : '¡Modulo no encontrado!';
  }

  calcularPromedio() {
    const nota1 = parseFloat(this.calificacion.nota_1p);
    const nota2 = parseFloat(this.calificacion.nota_2p);
    const promedio = (nota1 + nota2) / 2;
    this.calificacion.promedio = promedio.toFixed(2);
  }

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
          this.router.navigate(['/profesores']);
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
