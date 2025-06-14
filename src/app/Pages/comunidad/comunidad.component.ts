import { Component } from '@angular/core';
import { BlogComponent } from '../../Components/blog/blog.component';
import { BuzonAnonimoComponent } from '../../Components/buzon-anonimo/buzon-anonimo.component';

@Component({
  selector: 'app-comunidad',
  standalone: true,
  imports: [BlogComponent,BuzonAnonimoComponent],
  templateUrl: './comunidad.component.html',
  styleUrl: './comunidad.component.css',

  template: `
    <div class="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      <h1 class="text-4xl font-extrabold text-indigo-700 mb-10 text-center">
        Espacios de Expresión y Comunidad
      </h1>

      <!-- Aquí insertas el componente buzón -->
      <app-buzon-anonimo></app-buzon-anonimo>
    </div>
  `,
})
export class ComunidadComponent {

}
