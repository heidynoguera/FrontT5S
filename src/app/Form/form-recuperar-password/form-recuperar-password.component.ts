import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-recuperar-password',
  templateUrl: './form-recuperar-password.component.html',
  styleUrls: ['./form-recuperar-password.component.css']
})
export class FormRecuperarPasswordComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Wisconsin', abbreviation: 'WI'},
    {name: 'Wyoming', abbreviation: 'WY'}
  ];

  onSubmit(): void {
    alert('Thanks!');
  }
}
