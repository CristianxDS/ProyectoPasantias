import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // para ngIf, ngFor, etc.
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Taller, TallerService } from '../../Service/taller.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-talleres',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [TallerService],   // << Aquí agregas el servicio
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.css']
})
export class TalleresComponent {
 talleres: Taller[] = [];
  private subscription!: Subscription;

  constructor(private tallerService: TallerService) {}

  ngOnInit() {
    this.subscription = this.tallerService.talleres$.subscribe(talleres => {
      this.talleres = talleres;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
