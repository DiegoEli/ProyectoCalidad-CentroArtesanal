import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  constructor(private router: Router) { }

  iniciarSesion() {
    const correo = (<HTMLInputElement>document.getElementById('floatingInput')).value; // Obtén el valor del campo de correo electrónico
    const contrasena = (<HTMLInputElement>document.getElementById('floatingPassword')).value; // Obtén el valor del campo de correo electrónico
  
  
    // Verificar las credenciales ingresadas
    if (correo === 'profesor@ug.edu.ec' && contrasena === '12345') {
      this.router.navigate(['/profesores']); // Redirige a componente si las credenciales son correctas
    } else if (correo === 'estudiante@ug.edu.ec' && contrasena === '123') {
      this.router.navigate(['/estudiantes']); // Redirige a componenteY si las credenciales son correctas
    } else {
      alert('Usuario o contraseña incorrectos'); // Muestra un mensaje de alerta si las credenciales son incorrectas
    }
  }
    
}
