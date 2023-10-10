import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


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

  onSubmit(): void {
    alert('Thanks!');
  }
  onFileSelected(event: any) {
    const ArchivoRepo = event.target.files[0]; // Obtiene el primer archivo seleccionado

    if (ArchivoRepo) {
      // Realiza acciones con el archivo seleccionado, como enviarlo a un servidor o procesarlo
      console.log('Archivo seleccionado:', ArchivoRepo);

      // Aquí puedes agregar la lógica adicional que necesites
    }
  }
}
