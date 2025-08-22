import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
 isModalOpen = false;
  router: any;
  abrirModal(){ this.isModalOpen = true; }
  cerrarModal(){ this.isModalOpen = false; }

  go(path: string) {
    this.router.navigateByUrl(path);
    return false; // opcional: evita que otro handler cancele
  }
  scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

}
