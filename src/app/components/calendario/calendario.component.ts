import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})

export class CalendarioComponent implements OnInit{

  constructor(public api: RestService){

  }
  ngOnInit(): void{
    this.get();
  }

  public get (){
    this.api.Get("calendarios");
  }
}

