import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-narvar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './narvar.component.html',
  styleUrl: './narvar.component.css'
})
export class NarvarComponent {
scrollTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


}
