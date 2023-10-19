import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-estudiantes',
  templateUrl: './form-estudiantes.component.html',
  styleUrls: ['./form-estudiantes.component.css']
})
export class FormEstudiantesComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    company: null,
    Apellidos: [null, Validators.required],
    Nombres: [null, Validators.required],
    documentType: [null, Validators.required],
    NumeroDocumento: [null, Validators.required],
    Celular: [null, Validators.required],
    Correo: [null, Validators.required],
    Direccion: [null, Validators.required],
    NombreUsuario: [null, Validators.required],
    password: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  Documento = [
    {name: 'Tarjeta de identidad', abbreviation:'TI'},
    {name: 'Cédula de ciudadanía', abbreviation:'CC'},
    {name: 'Cédula de extranjería',abbreviation:'CE'},
    {name: 'NIT', abbreviation:'NIT'},
    {name: 'Pasaporte', abbreviation:'P.P'},
  ]

  

  onSubmit(): void {
    alert('Thanks!');
  }
}
