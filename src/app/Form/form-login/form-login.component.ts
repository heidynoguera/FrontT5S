import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    company: null,
    User: [null, Validators.required],
    Password: [null, Validators.required],
   
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;


  onSubmit(): void {
    alert('Thanks!');
  }
}
