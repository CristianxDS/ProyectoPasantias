import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule,DatePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
    template: `
    <section class="bg-white p-6 rounded shadow-md max-w-3xl mx-auto">
      <h2 class="text-2xl font-bold mb-4 text-indigo-700">Blog para jóvenes</h2>
      
      <textarea
        [(ngModel)]="newPost"
        rows="4"
        placeholder="Escribe algo para compartir..."
        class="w-full p-2 border rounded resize-none focus:outline-indigo-500"
      ></textarea>
      
      <button (click)="addPost()" class="mt-3 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
        Publicar
      </button>

      <div *ngFor="let post of posts" class="mt-4 p-3 border rounded bg-indigo-50">
        {{ post }}
      </div>
    </section>
  `,
})
export class BlogComponent {
publicaciones = [
    { titulo: 'Mi primer dibujo', contenido: 'Hoy dibujé un paisaje y me hizo sentir en paz.', autor: 'Ana', fecha: new Date() }
  ];

  nuevaPublicacion = {
    titulo: '',
    contenido: '',
    autor: ''
  };

  agregarPublicacion() {
    if (this.nuevaPublicacion.titulo && this.nuevaPublicacion.contenido && this.nuevaPublicacion.autor) {
      this.publicaciones.unshift({
        ...this.nuevaPublicacion,
        fecha: new Date()
      });

      this.nuevaPublicacion = { titulo: '', contenido: '', autor: '' };
    }
  }
}
