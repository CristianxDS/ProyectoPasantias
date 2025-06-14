import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MensajesService } from '../../Service/mensajes.service';

@Component({
  selector: 'app-buzon-anonimo',
  standalone: true,
  imports: [FormsModule, DatePipe],
  template: `
<section class="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 class="text-2xl font-bold mb-4 text-indigo-700">Buzón Anónimo</h2>

      <form (submit)="onEnviar($event)">
        <textarea
          #mensajeArea
          rows="4"
          placeholder="¿Cómo te sientes? Comparte aquí..."
          class="w-full p-2 border rounded resize-none focus:outline-indigo-500"
          required
        ></textarea>

        <button type="submit" class="mt-3 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
          Enviar
        </button>
      </form>

      <div *ngFor="let msg of mensajes" class="mt-4 p-3 border rounded bg-gray-100">
        <p class="text-gray-800">{{ msg.contenido }}</p>
        <p class="text-sm text-gray-500 mt-1">{{ msg.fecha | date:'short' }}</p>
      </div>
    </section>
  `,
})
export class BuzonAnonimoComponent {
mensajes: { contenido: string; fecha: Date }[] = [];

  onEnviar(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const textarea = form.querySelector('textarea') as HTMLTextAreaElement;
    const texto = textarea.value.trim();

    if (!texto) return;

    this.mensajes.unshift({
      contenido: texto,
      fecha: new Date(),
    });

    textarea.value = '';
}
}
