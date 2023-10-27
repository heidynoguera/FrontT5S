import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


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
    password: [null, Validators.required]     
    
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
    if (this.addressForm.valid) {
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
