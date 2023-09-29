import {ViewChild ,AfterViewInit, Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from 'src/app/services/rest.service';




@Component({
  selector: 'app-tutor-materia',
  templateUrl: './tutor-materia.component.html',
  styleUrls: ['./tutor-materia.component.css']
})
export class TutorMateriaComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

    constructor(public api: RestService){
     this.dataSource = new MatTableDataSource();
    }
    ngOnInit(): void{
     //this.get();
    this.api.Get("TutorMateria").then((res)=>{
      for(let index = 0; index < res.length; index++){
        this.loadTable([res[index]])
      }
      this.dataSource.data= res;
    })
  }

    ngAfterViewInit(): void {
       
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    loadTable(data:any[]){
      this.displayedColumns=[];
      for(let column in data[0]){
        this.displayedColumns.push(column)
      }
      }
    
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
        
      }
      }
    }
  
  
    
     

