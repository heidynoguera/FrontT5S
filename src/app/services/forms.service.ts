import { Injectable } from '@angular/core';
import { CalendarioMV } from '../Models/CalendarioMV';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor() { }
  title:string;
  calendario:CalendarioMV
}

