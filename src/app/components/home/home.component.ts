import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //INICIO DISEÑO
  //Metodo para cargar la pagina, desde el inicio
  constructor(private router: Router) { }
  navigateToComponent(route: string): void {
    this.router.navigateByUrl(route)
      .then(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }//FIN DISEÑO
}
