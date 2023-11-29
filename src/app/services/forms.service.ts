import { Injectable } from '@angular/core';
import { CalendarioMV } from '../Models/CalendarioMV';
import { BehaviorSubject } from 'rxjs';
import { formaPagoMV } from '../Models/formaPagoMV';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  private userNameSource = new BehaviorSubject<string>('T 5 S');
  currentUserName = this.userNameSource.asObservable();

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() { }
  title:string;
  calendario:CalendarioMV;
  avatar:string;
  formaPago:formaPagoMV;

  changeUserName(name: string) {
    this.userNameSource.next(name);
    localStorage.setItem('nombre', name)
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login() {
    // Lógica para el inicio de sesión exitoso
    this.loggedIn.next(true);
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout() {
    // Lógica para cerrar sesión
    this.loggedIn.next(false);
    localStorage.setItem('nombre',"T 5 S");
    localStorage.removeItem('isLoggedIn');
  } 

}

