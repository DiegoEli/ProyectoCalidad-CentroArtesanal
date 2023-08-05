import { Component, OnInit } from '@angular/core';
import { CalificacionesModel } from 'src/app/shared/calificaciones.model';
import { CalificacionesService } from 'src/app/shared/calificaciones.service';

@Component({
  selector: 'app-estudiantes-aspirante-beca',
  templateUrl: './estudiantes-aspirante-beca.component.html',
  styleUrls: ['./estudiantes-aspirante-beca.component.css']
})
export class EstudiantesAspiranteBecaComponent implements OnInit {

  calificaciones: CalificacionesModel[] = [];
  promedioGeneral: number = 0;
  descuento: number = 0;

  descuentos = [
    { min: 10.00, max: 10.00, descuento: 30 },
    { min: 9.50, max: 9.99, descuento: 20 },
    { min: 9.00, max: 9.49, descuento: 10 }
  ];

  constructor(
    private calificacionesService: CalificacionesService
  ) { }

  ngOnInit() {
    this.obtenerCalificaciones();
  }
  
  obtenerCalificaciones() {
    this.calificacionesService.obtenerCalificaciones().subscribe(
      (data) => {
        this.calificaciones = data;
        this.calcularPromedioGeneral();
        this.calcularDescuento();
      },
      (error) => {
        console.error('Error al obtener las calificaciones', error);
      }
    );
  }

  calcularPromedioGeneral() {
    let totalNotas = 0;

    this.calificaciones.forEach((calificacion) => {
      totalNotas += parseFloat(calificacion.promedio);
    });

    this.promedioGeneral = Number((totalNotas / this.calificaciones.length).toFixed(2));
  }

  calcularDescuento() {
    this.descuento = 0;

    for (const desc of this.descuentos) {
      if (this.promedioGeneral >= desc.min && this.promedioGeneral <= desc.max) {
        this.descuento = desc.descuento;
        break;
      }
    }

  }

}
