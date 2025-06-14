import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NarvarComponent } from "./Components/narvar/narvar.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NarvarComponent, FooterComponent,NarvarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto1';
}
