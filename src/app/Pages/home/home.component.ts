import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit {
  showModal = true;

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const accepted = localStorage.getItem('dataProtectionAccepted');
      if (!accepted) {
        this.showModal = true; // Aquí se activa el modal si no hay aceptación previa
      }
    }
  }

  acceptPolicy() {
    localStorage.setItem('dataProtectionAccepted', 'true');
    this.showModal = false;
  }

  declinePolicy() {
    alert('Para usar este sitio, debes aceptar la política de protección de datos.');
  }
}


