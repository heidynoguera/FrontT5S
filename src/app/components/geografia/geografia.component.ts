import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-geografia',
  templateUrl: './geografia.component.html',
  styleUrls: ['./geografia.component.css']
})
export class GeografiaComponent implements OnInit{
  constructor(public api: RestService){
  }
  ngOnInit(): void{
    this.get();
  }

  public get (){
    this.api.Get("Geografiums");
  }

}
