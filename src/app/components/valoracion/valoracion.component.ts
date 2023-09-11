import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent implements OnInit {

  constructor(public api: RestService){

  }
  ngOnInit(): void{
    this.get();
  }

  //valoracion create v2

  public get (){
    this.api.Get("valoracion");
  }
}
