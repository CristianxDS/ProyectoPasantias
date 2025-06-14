import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Taller {
  id: number;
  titulo: string;
  descripcion: string;
  pdfUrl?: string;
  imagenUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TallerService {
  private talleres: Taller[] = [];
  
  // BehaviorSubject para emitir los cambios de talleres
  private talleresSubject = new BehaviorSubject<Taller[]>([]);
  talleres$: Observable<Taller[]> = this.talleresSubject.asObservable();

  constructor() {
    const data = localStorage.getItem('talleres');
    if (data) {
      this.talleres = JSON.parse(data);
    }
    this.talleresSubject.next(this.talleres);
  }

  private guardar() {
    localStorage.setItem('talleres', JSON.stringify(this.talleres));
    this.talleresSubject.next(this.talleres);  // Emite actualización
  }

  obtenerTalleres(): Taller[] {
    return this.talleres;
  }

  agregarTaller(taller: Taller) {
    this.talleres.push(taller);
    this.guardar();
  }

  actualizarTaller(tallerActualizado: Taller) {
    const index = this.talleres.findIndex(t => t.id === tallerActualizado.id);
    if (index !== -1) {
      this.talleres[index] = tallerActualizado;
      this.guardar();
    }
  }

  eliminarTaller(id: number) {
    this.talleres = this.talleres.filter(t => t.id !== id);
    this.guardar();
  }
}
