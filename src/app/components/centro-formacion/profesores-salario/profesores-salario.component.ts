import { Component, OnInit } from '@angular/core';
import { SalarioModel } from 'src/app/shared/salario.model';
import { SalarioService } from 'src/app/shared/salario.service';

@Component({
  selector: 'app-profesores-salario',
  templateUrl: './profesores-salario.component.html',
  styleUrls: ['./profesores-salario.component.css']
})
export class ProfesoresSalarioComponent implements OnInit {

  salarios: SalarioModel[] = [];
  turnoAplicado: string = '';
  salarioAplicado: string = '0.00';
  tiempo: string = 'Completo';

  titulosUniversitarios = [
    { remuneracion: 60, turno: 'Rotativo', titulo: 'Tercer nivel',
      textAdd: 'titular', textAdd2: 'a las materias del Centro de Formación' },
    { remuneracion: 80, turno: 'Fijo', titulo: 'Cuarto nivel sin afinidad',
      textAdd: 'ocasional',textAdd2: 'y si es afín el 100%.' }
  ];

  contratosCentroFormacion = [
    { contrato: 'Contrato u ocasional', tiempo: 'Medio', pagoFinal: '1,000.00' },
    { contrato: 'Contrato u ocasional', tiempo: 'Completo', pagoFinal: '2,100.00' },
    { contrato: 'Nombramiento', tiempo: 'Medio', pagoFinal: '1,600.00' },
    { contrato: 'Nombramiento', tiempo: 'Completo', pagoFinal: '3,200.00' }
  ];

  constructor(
    private salarioService: SalarioService
  ) { }

  ngOnInit() {
    this.obtenerSalarios();
  }

  obtenerSalarios() {
    this.salarioService.obtenerSalarios().subscribe(
      (data) => {
        this.salarios = data;
        this.aplicarCondiciones();
      },
      (error) => {
        console.error('Error al obtener los salarios', error);
      }
    );
  }

  aplicarCondiciones() {
    this.salarioAplicado = '';
    this.turnoAplicado = '';

    // Recorremos el arreglo de salarios y verificamos si el turno coincide
    for (const salario of this.salarios) {
      if (salario.titulo === this.titulosUniversitarios[0].turno && salario.contrato === this.contratosCentroFormacion[0].contrato) {
        this.salarioAplicado = this.tiempo === 'Medio' ? this.contratosCentroFormacion[0].pagoFinal : this.contratosCentroFormacion[1].pagoFinal;
        //variable "tiempo" en el arreglo SalarioModel[]
        //this.salarioAplicado = salario.tiempo === 'Medio' ? this.contratosCentroFormacion[0].pagoFinal : this.contratosCentroFormacion[1].pagoFinal;
      }this.turnoAplicado = this.titulosUniversitarios[0].turno;

      if (salario.titulo === this.titulosUniversitarios[1].turno && salario.contrato === this.contratosCentroFormacion[2].contrato) {
        this.salarioAplicado = this.tiempo === 'Medio' ? this.contratosCentroFormacion[2].pagoFinal : this.contratosCentroFormacion[3].pagoFinal;
        //variable "tiempo" en el arreglo SalarioModel[]yyyy
        //this.salarioAplicado = salario.tiempo === 'Medio' ? this.contratosCentroFormacion[2].pagoFinal : this.contratosCentroFormacion[3].pagoFinal;
      }this.turnoAplicado = this.titulosUniversitarios[1].turno;
    }

  }

}
