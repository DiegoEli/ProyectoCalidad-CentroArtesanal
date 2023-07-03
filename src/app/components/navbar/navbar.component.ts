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
      this.router.navigate(['/docentes']); // Redirige a componenteX si las credenciales son correctas
    } else if (correo === 'estudiante@ug.edu.ec' && contrasena === '123') {
      this.router.navigate(['/estudiantes']); // Redirige a componenteY si las credenciales son correctas
    } else {
      alert('Usuario o contraseña incorrectos'); // Muestra un mensaje de alerta si las credenciales son incorrectas
    }
  }
  
  
  // iniciarSesion() {
    
  //   const correo = (<HTMLInputElement>document.getElementById('floatingInput')).value; // Obtén el valor del campo de correo electrónico
  
  //   if (correo === 'profesor@ug.edu.ec') {
  //     this.router.navigate(['/docentes']); // Redirige al Componente1 si la cadena es igual a 'opcion1'
  //   } else if (correo === 'estudiante@ug.edu.ec') {
  //     this.router.navigate(['/estudiantes']); // Redirige al Componente2 si la cadena es igual a 'opcion2'
  //   } else {
  //     alert('Este usuario no existe'); // Muestra un mensaje de alerta si la cadena no coincide con las opciones anteriores
  //   }
  // }
  
}
