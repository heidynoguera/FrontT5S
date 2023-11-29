import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-recuperar-password',
  templateUrl: './form-recuperar-password.component.html',
  styleUrls: ['./form-recuperar-password.component.css']
})
export class FormRecuperarPasswordComponent {
  private fb = inject(FormBuilder);

  passwordResetForm = this.fb.group({
    email: [null, Validators.required]
  });

  constructor(private router: Router){
  }

  onSubmit(): void {
    const email = this.passwordResetForm.get('email').value;

    if (email) {
      Swal.fire(
        'Contraseña Restablecida',
        'Sigue los pasos que llegarán a tu correo para el restablecimiento de la contraseña',
        'success'
      );
      this.router.navigate(['/']);
    } else {
      Swal.fire(
        'Campo Vacío',
        'Por favor, ingresa tu contraseña',
        'error'
      );
    }
  }
}