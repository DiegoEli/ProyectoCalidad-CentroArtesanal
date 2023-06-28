import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required]
    });
  }

  acceder() {
    if (this.formulario.valid) {
      // Aquí puedes realizar acciones adicionales, llamar a otro componente, enviar datos, etc.
    } else {
      // Mostrar mensajes de error o realizar acciones cuando el formulario no sea válido
    }
  }
}
