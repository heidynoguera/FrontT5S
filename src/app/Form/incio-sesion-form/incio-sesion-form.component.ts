import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsService } from 'src/app/services/forms.service';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-incio-sesion-form',
  templateUrl: './incio-sesion-form.component.html',
  styleUrls: ['./incio-sesion-form.component.css']
})
export class IncioSesionFormComponent {

  usuariosArray: { nombreusuario: string, password: string }[] = [];

  constructor(private restService: RestService, private formService: FormsService, private router: Router) { }

  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required]
  });

  hasUnitNumber = false;

  onSubmit(): void {
    const usuarioValue = this.loginForm.controls.usuario.value;
    const passwordValue = this.loginForm.controls.password.value;
    const loginEstado = false;

    this.restService.Login(usuarioValue, passwordValue)
      .then((response) => {

        if (response != null) {
          const userData = response;
          const loginEstado = true;
          const nombre = localStorage.setItem('nombre', usuarioValue);
          this.formService.changeUserName(localStorage.getItem('nombre'));
          console.log(nombre)
          console.log(loginEstado)
          console.log('Datos del estudiante:', userData);
          this.formService.login();
          Swal.fire({
            title: 'Usuario Autenticado!',
            text: 'Inicio de Sesión Exitoso!',
            icon: 'success'
          });
          this.router.navigate(['/bienvenida']);
        } else {
          console.log('Inicio de sesión fallido. Credenciales incorrectas.');
          Swal.fire({
            title: 'Usuario NO Autenticado!',
            text: 'Inicio de Sesión FALLIDO!',
            icon: 'error'
          });
        }
      })
      .catch((error) => {
        const loginEstado = false;
        console.log(loginEstado);
        console.error('Error al iniciar sesión:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Ocurrió un error al iniciar sesión',
          icon: 'error'
        });
      });
  }

}
