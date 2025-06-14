import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  private mensajesSubject: BehaviorSubject<any[]>;

  constructor() {
    const saved = localStorage.getItem('mensajes');
    this.mensajesSubject = new BehaviorSubject<any[]>(saved ? JSON.parse(saved) : []);
  }

  getMensajes(): Observable<any[]> {
    return this.mensajesSubject.asObservable();
  }

  enviarMensaje(mensaje: any): Observable<any> {
    const mensajes = this.mensajesSubject.getValue();
    mensajes.unshift(mensaje);
    localStorage.setItem('mensajes', JSON.stringify(mensajes));
    this.mensajesSubject.next(mensajes);
    return of(mensaje);
  }
}
