import { Injectable } from '@angular/core';
import { CalendarioMV } from '../Models/CalendarioMV';
import { BehaviorSubject } from 'rxjs';
import { formaPagoMV } from '../Models/formaPagoMV';
import { CalendarioNewMV } from '../Models/CalendarioNewMV';
import { formaPagoNewMV } from '../Models/formaPagoNewMV';
import { registroEstudianteMV } from '../Models/registroEstudianteMV';
import { registroLoginMV } from '../Models/registroLoginMV';
import { GeografiaMV } from '../Models/GeografiaMV';
import { GeografiaNewMV } from '../Models/GeografiaNewMV';
import { RepositorioMV } from '../Models/RepositorioMV';
import { RepositorioNewMv } from '../Models/RepositorioNewMv';
import { ReservaTutoMV } from '../Models/ReservaTutoMV';
import { reservaTutoNewMV } from '../Models/ReservaTutoNewMV';



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
  calendarioNew: CalendarioNewMV;
  formaPagoNew: formaPagoNewMV;
  registroEstudiante: registroEstudianteMV;
  registroLogin: registroLoginMV;
  geografia:GeografiaMV;
  geografiaNew: GeografiaNewMV;
  repositorio: RepositorioMV;
  repositorioNew:  RepositorioNewMv; 
  reservaTuto: ReservaTutoMV;
  reservaTutoNew: reservaTutoNewMV;

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

