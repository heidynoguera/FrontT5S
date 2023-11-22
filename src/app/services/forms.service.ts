import { Injectable } from '@angular/core';
import { CalendarioMV } from '../Models/CalendarioMV';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  private userNameSource = new BehaviorSubject<string>('T 5 S');
  currentUserName = this.userNameSource.asObservable();

  constructor() { }
  title:string;
  calendario:CalendarioMV;
  avatar:string;

  changeUserName(name: string) {
    this.userNameSource.next(name);
  }

}

