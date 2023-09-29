import { RestService } from 'src/app/services/rest.service';
import {ViewChild ,AfterViewInit, Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';




@Component({
  selector: 'app-tutor-materia',
  templateUrl: './tutor-materia.component.html',
  styleUrls: ['./tutor-materia.component.css']
})
export class TutorMateriaComponent implements OnInit {
  constructor(public api: RestService){

  }
  ngOnInit(): void{
    this.get();
  }

  public get (){
    this.api.Get("tutormateriums");
  }

}
