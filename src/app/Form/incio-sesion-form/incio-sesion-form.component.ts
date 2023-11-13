import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-incio-sesion-form',
  templateUrl: './incio-sesion-form.component.html',
  styleUrls: ['./incio-sesion-form.component.css']
})
export class IncioSesionFormComponent {

  usuariosArray: { nombreusuario: string, password: string }[] = [];

  constructor(private restService: RestService) {}

  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required]
  });

  hasUnitNumber = false; 

  onSubmit(): void {
    const usuarioValue = this.loginForm.controls.usuario.value;
    const passwordValue = this.loginForm.controls.password.value;

    console.log(usuarioValue);
    console.log(passwordValue);

    this.restService.Get("Logins/").then((response) => {
      if (Array.isArray(response)) {
        this.usuariosArray = response;
        console.log('Usuarios Array:', this.usuariosArray);

        const usuarioEncontrado = this.usuariosArray.find(user => user.nombreusuario === usuarioValue);

        if (usuarioEncontrado && usuarioEncontrado.password === passwordValue) {
          console.log('El usuario y la contraseña coinciden.' + usuarioEncontrado);

          Swal.fire({
            title: "Usuario Autenticado!",
            text: "Inicio de Sesion Exitoso!",
            icon: "success"
          });
        } else {
          console.log('El usuario o la contraseña NO coinciden.');
          console.log('Usuarios lista: ' +  this.usuariosArray.map(user => user.nombreusuario));
          Swal.fire({
            title: "Usuario NO Autenticado!",
            text: "Inicio de Sesion FALLIDO!",
            icon: "error"
          });
        }
      }
    }).catch((error) => {
      console.error('Error al obtener los datos del servicio:', error);
    });
  }
}
