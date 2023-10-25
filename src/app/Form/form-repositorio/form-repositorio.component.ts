import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-repositorio',
  templateUrl: './form-repositorio.component.html',
  styleUrls: ['./form-repositorio.component.css']
})
export class FormRepositorioComponent {
  private fb = inject(FormBuilder);
  repositorioForm = this.fb.group({
    NombreRepo: [null, Validators.required],
    ArchivoRepo: [null, Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Alabama', abbreviation: 'AL'},

  ];


  onFileSelected(event: any) {
    const ArchivoRepo = event.target.files[0]; // Obtiene el primer archivo seleccionado

    if (ArchivoRepo) {
      // Realiza acciones con el archivo seleccionado, como enviarlo a un servidor o procesarlo
      console.log('Archivo seleccionado:', ArchivoRepo);

      // Aquí puedes agregar la lógica adicional que necesites
   
    }
  }

  onSubmit(): void {
    if (this.repositorioForm.valid) {
    Swal.fire(
      'Buen Trabajo!',
      'Haz Terminado El Formulario!',
      'success'
    )
    }else{
      Swal.fire(
        'Por favor llenar todos los campos!',
        'Error en el Formulario!',
        'error'
      )
    }
  }
}
