import { Component, inject } from '@angular/core';
import { FormsService } from 'src/app/services/forms.service';
import { RestService } from 'src/app/services/rest.service';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent {
  type: string = 'password';
  isText: boolean = false;
  eyeIcon:string = "fa-eye-slash"
  private fb = inject(FormBuilder);
  registerForm = this.fb.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required],
    correo: ['', [Validators.required,Validators.email]],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    direccion: ['', Validators.required],
    celular: ['', Validators.required],
    numeroDocumento: ['', Validators.required],
    tipoDocumento: ['', Validators.required],
    //roles: [null, Validators.required]
  });
  hasUnitNumber = false;

  roles = [
    {name: 'Estudiante'},
    {name: 'Tutor'}

  ];

  constructor(private restService: RestService, private formService: FormsService) { }

  ngOnInit(): void {
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = 'fa-eye' : this.eyeIcon = 'fa-eye-slash'
    this.isText ? this.type = 'text' : this.type = 'password'
  }
  onSingUp(){
    const User = this.registerForm.controls.usuario.value;
    const password = this.registerForm.controls.password.value;
    const estado = "Activo";
    const nombre = this.registerForm.controls.nombre.value;
    const apellido = this.registerForm.controls.apellido.value; 
    const fechaNacimiento = this.registerForm.controls.fechaNacimiento.value;
    const tipoDocumento = this.registerForm.controls.tipoDocumento.value;
    const numeroDocumento = this.registerForm.controls.numeroDocumento.value;
    const celular = this.registerForm.controls.celular.value;
    const correo = this.registerForm.controls.correo.value;
    const direccion = this.registerForm.controls.direccion.value;

    //this.restService.Get("Estudiantes", [])
    //const correo = this.registerForm.controls.correo.value;
    //const roles = this.registerForm.controls.roles.value;
  
      // this.restService.postLogin(usuario, password)
      //   .subscribe(
      //     respuesta => {
      //       if (respuesta.exitoso) {
      //         // La operación fue exitosa
      //         console.log('Mensaje del servidor:', respuesta.mensaje);
      //       } else {
      //         // La operación no fue exitosa
      //         console.error('Error del servidor:', respuesta.mensaje);
      //       }
      //     },
      //     error => {
      //       console.error('Error al realizar la solicitud POST:', error);
      //       // Aquí puedes manejar los errores según tus necesidades
      //     }
      //   );
    }
      
  }

