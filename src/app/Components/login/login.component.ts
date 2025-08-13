import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule, FormsModule], // y este imports también
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  usuario = '';
  contrasena = '';
  error = false;
  private redirectTo = '/formulario'; // por defecto

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const to = params['to'];
      if (typeof to === 'string' && to.trim()) {
        this.redirectTo = to.startsWith('/') ? to : `/${to}`;
      }
    });
  }

  login(): void {
    if (this.usuario === 'admin' && this.contrasena === '1234') {
      localStorage.setItem('isAdmin', 'true');
      this.error = false;
      this.router.navigate([this.redirectTo]); // usa ?to=comunidad para moderar
    } else {
      this.error = true;
      localStorage.removeItem('isAdmin');
    }
  }
}
