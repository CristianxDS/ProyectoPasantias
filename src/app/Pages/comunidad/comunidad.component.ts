import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   // ← *ngFor / *ngIf
import { FormsModule } from '@angular/forms';     // ← [(ngModel)]
import { Mensaje } from '../../Service/mensajes.service';

@Component({
  selector: 'app-comunidad',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css'],      // ← plural
})


export class ComunidadComponent {
  
mensajeActual = '';
  mensajes: Mensaje[] = [];

  ngOnInit(): void {
    const saved = localStorage.getItem('mensajes');
    this.mensajes = saved ? JSON.parse(saved) as Mensaje[] : [];
  }

  get isAdmin(): boolean {
    return localStorage.getItem('isAdmin') === 'true';
  }

  private persist(): void {
    localStorage.setItem('mensajes', JSON.stringify(this.mensajes));
  }

  enviarMensaje(): void {
    const texto = this.mensajeActual.trim();
    if (!texto) return;

    const nuevo: Mensaje = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2),
      contenido: texto,
      fecha: new Date().toISOString(),
    };

    this.mensajes.unshift(nuevo);
    this.persist();
    this.mensajeActual = '';
  }

  eliminarMensaje(id: string): void {
    if (!this.isAdmin) return; // seguridad básica en cliente
    this.mensajes = this.mensajes.filter(m => m.id !== id);
    this.persist();
  }

  trackById(_i: number, m: Mensaje) { return m.id; }

  // opcional: botón para salir del modo admin
  logout(): void {
    localStorage.removeItem('isAdmin');
  }
}
