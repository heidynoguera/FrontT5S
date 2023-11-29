import { Component, OnInit } from '@angular/core';
import { FormsService } from './services/forms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private formService: FormsService){

  }

  ngOnInit(): void {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const storedName = localStorage.getItem('nombre');
    if (isLoggedIn) {
      this.formService.login();
    }
    if (storedName) {
      this.formService.changeUserName(storedName);
    }
  }
  title = 'T5S';
}
