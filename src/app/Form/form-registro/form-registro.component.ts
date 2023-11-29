import { Component, inject } from '@angular/core';
import { FormsService } from 'src/app/services/forms.service';
import { RestService } from 'src/app/services/rest.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { registroEstudiante} from 'src/app/Models/registroEstudiante';
import { registroLogin } from 'src/app/Models/registroLogin';
import { Router } from '@angular/router';



@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent {
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash"
  private fb = inject(FormBuilder);
  registerForm = this.fb.group({
    NombreUsuario: ['', Validators.required],
    password: ['', Validators.required],
    Correo: ['', [Validators.required, Validators.email]],
    Nombres: ['', Validators.required],
    Apellidos: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    Direccion: ['', Validators.required],
    Celular: ['', Validators.required],
    NumeroDocumento: ['', Validators.required],
    documentType: ['', Validators.required],
  });
  hasUnitNumber = false;

  Documento = [
    { name: 'Tarjeta de identidad', abbreviation: 'TI' },
    { name: 'Cédula de ciudadanía', abbreviation: 'CC' },
    { name: 'Cédula de extranjería', abbreviation: 'CE' },
    { name: 'NIT', abbreviation: 'NIT' },
    { name: 'Pasaporte', abbreviation: 'P.P' },
  ]

  constructor(private restService: RestService, private formService: FormsService, private router: Router) { }

  ngOnInit(): void {
  }
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = 'fa-eye' : this.eyeIcon = 'fa-eye-slash'
    this.isText ? this.type = 'text' : this.type = 'password'
  }

  onSubmit(): void {
    if (this.registerForm.valid) {

      let object: registroEstudiante = {
        NombreEst: this.registerForm.controls.Nombres.value,
        ApellidoEst: this.registerForm.controls.Apellidos.value,
        FechaNacimientoEst: new Date(this.registerForm.controls.fechaNacimiento.value),
        TipoDocumentoEst: this.registerForm.controls.documentType.value,
        NumeroDocumentoEst: Number(this.registerForm.controls.NumeroDocumento.value),
        CelularEst: Number(this.registerForm.controls.Celular.value),
        CorreoEst: this.registerForm.controls.Correo.value,
        DireccionEst: this.registerForm.controls.Direccion.value,
        PasswordEst: this.registerForm.controls.password.value,
        estado: "Activo",
        NombreUsuarioEst: this.registerForm.controls.NombreUsuario.value,
      }

      this.restService.Post("Estudiantes", object);

      let objects: registroLogin = {
        User: this.registerForm.controls.NombreUsuario.value,
        Password: this.registerForm.controls.password.value,
        estado: "Activo",
      }

      this.restService.Post("Logins", objects)

      this.router.navigate(['/']);

      Swal.fire(
        'Buen Trabajo!',
        'Haz Terminado El Formulario!',
        'success'
      )
    } else {
      Swal.fire(
        'Por favor llenar todos los campos!',
        'Error en el Formulario!',
        'error'
      )
    }
  }

}

