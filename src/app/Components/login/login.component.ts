import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario: string = '';
  contrasena: string = '';
  error: boolean = false;

  constructor(private router: Router) {}

  login() {
    // Aquí puedes poner tus credenciales reales o hacer una llamada a tu backend
    if (this.usuario === 'admin' && this.contrasena === '1234') {
      this.error = false;
      this.router.navigate(['/formulario']);
    } else {
      this.error = true;
    }
  }
}
