import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Taller, TallerService } from '../../Service/taller.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulaiotaller',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulaiotaller.component.html',
  styleUrls: ['./formulaiotaller.component.css']
})
export class FormulaiotallerComponent {
  talleres: Taller[] = [];
  formulario: FormGroup;
  modoEdicion: boolean = false;
  idEditando: number | null = null;

  constructor(private tallerService: TallerService, private fb: FormBuilder,private router: Router) {
    this.formulario = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      pdfUrl: [''],
      imagenUrl: ['']
    });

    this.cargarTalleres();
  }

  cargarTalleres() {
    this.talleres = this.tallerService.obtenerTalleres();
  }

  agregarTaller() {
    if (this.formulario.valid) {
      if (this.modoEdicion && this.idEditando !== null) {
        const actualizado: Taller = {
          id: this.idEditando,
          ...this.formulario.value
        };
        this.tallerService.actualizarTaller(actualizado);
        this.modoEdicion = false;
        this.idEditando = null;
      } else {
        const nuevoTaller: Taller = {
          id: Date.now(),
          ...this.formulario.value
        };
        this.tallerService.agregarTaller(nuevoTaller);
      }

      this.cargarTalleres();
      this.formulario.reset();
      this.router.navigate(['/talleres']);
    }
  }

  editarTaller(taller: Taller) {
    this.formulario.patchValue(taller);
    this.modoEdicion = true;
    this.idEditando = taller.id;
  }

  eliminarTaller(id: number) {
    this.tallerService.eliminarTaller(id);
    this.cargarTalleres();
  }


  onImagenSeleccionada(event: any) {
  const archivo = event.target.files[0];
  if (archivo) {
    const reader = new FileReader();
    reader.onload = () => {
      this.formulario.patchValue({ imagenUrl: reader.result as string });
    };
    reader.readAsDataURL(archivo);
  }
}

onPdfSeleccionado(event: any) {
  const archivo = event.target.files[0];
  if (archivo) {
    const reader = new FileReader();
    reader.onload = () => {
      this.formulario.patchValue({ pdfUrl: reader.result as string });
    };
    reader.readAsDataURL(archivo);
  }
}

}

