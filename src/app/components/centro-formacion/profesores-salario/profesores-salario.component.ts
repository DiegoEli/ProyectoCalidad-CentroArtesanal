import { Component, OnInit } from '@angular/core';
import { SalarioModel } from 'src/app/shared/salario.model';
import { SalarioService } from 'src/app/shared/salario.service';

@Component({
  selector: 'app-profesores-salario',
  templateUrl: './profesores-salario.component.html',
  styleUrls: ['./profesores-salario.component.css']
})
export class ProfesoresSalarioComponent implements OnInit{

  titulosUniversitarios: SalarioModel[] = [];
  contratosCentroFormacion: SalarioModel[] = [];

  salarioAplicado: string = '';

  constructor(
    private salarioService: SalarioService
  ) { }

  ngOnInit() {
    // Aquí obtenemos los datos del servicio y los asignamos a los arreglos correspondientes
      this.salarioService.obtenerSalarios().subscribe((salarios: SalarioModel[]) => {
      this.titulosUniversitarios = salarios.filter((salario) => salario.titulo === 'Fijo');
      this.contratosCentroFormacion = salarios.filter((salario) => salario.contrato === 'Nombramiento');
      this.calcularSalarioAplicado(); // Calculamos el salario aplicado
    });
  }

  // Método para calcular el salario aplicado
  calcularSalarioAplicado() {
    if (this.contratosCentroFormacion.length > 0) {
      // Aquí realizas la lógica para determinar el salario aplicado según las validaciones requeridas
      // Por ejemplo, podrías establecer una condición para comparar el título y el contrato, y asignar un salario correspondiente
      const salarioEncontrado = this.titulosUniversitarios.find(salario => salario.titulo === 'Fijo' && salario.contrato === 'Nombramiento');

      if (salarioEncontrado) {
        this.salarioAplicado = salarioEncontrado.cantidad_sueldo;
      } else {
        this.salarioAplicado = 'N/A';
      }
    } else {
      this.salarioAplicado = 'N/A';
    }
  }

}
