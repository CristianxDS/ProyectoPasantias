import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MensajesService } from '../../Service/mensajes.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-buzon-anonimo',
  standalone: true,
  imports: [FormsModule,BrowserModule],
  template:'./buzon-anonimo.component.html',
})
export class BuzonAnonimoComponent {
 mensajeActual = '';
  mensajes: { contenido: string; fecha: Date }[] = [];

  enviarMensaje(): void {
    const texto = this.mensajeActual.trim();
    if (!texto) return;

    // agrega arriba
    this.mensajes.unshift({
      contenido: texto,
      fecha: new Date(),
    });

    // limpia textarea
    this.mensajeActual = '';
  }

  // performance al hacer *ngFor
  trackByFecha(_i: number, m: { fecha: Date }) {
    return m.fecha;
  }
}
