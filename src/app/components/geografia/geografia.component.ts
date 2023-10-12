import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from 'src/app/services/rest.service';
import {MatDialog} from '@angular/material/dialog';
import { FormGeografiaComponent } from 'src/app/Form/form-geografia/form-geografia.component';

@Component({
  selector: 'app-geografia',
  templateUrl: './geografia.component.html',
  styleUrls: ['./geografia.component.css']
})
export class GeografiaComponent implements OnInit ,AfterViewInit{
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public api: RestService,public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.api.Get("Geografiums").then((res) => {

      for (let index = 0; index < res.length; index++) {
        this.loadTable([res[index]])
      }
      this.dataSource.data = res;
    })
  }

  ngAfterViewInit():void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadTable(data: any[]) {
    this.displayedColumns = [];
    for (let column in data[0]) {
      this.displayedColumns.push(column)
    }
    this.displayedColumns.push("Acciones")
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public get() {
    this.api.Get("Geografiums");
  }
  openDialog() {
    const dialogRef = this.dialog.open(FormGeografiaComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
//actualizar datos
  public putGeografia(idGeografia: number) { 
    const newData = { /* tus datos a actualizar */ };
    this.api.Put("Geografiums", idGeografia, newData);
  }
  //crear datos
  public postGeografia(newGeografia : any) {
    this.api.Post("Geografiums", newGeografia);
  }
  //borrar datos
  public async deleteGeografia(IdGeografia: string) {
    const response = await this.api.Delete("Geografiums", IdGeografia);
}
mostrarNotificacionDelete() {
  // Verificar si el navegador soporta las notificaciones
    alert("Delete")
}

mostrarNotificacionEdit() {
  // Verificar si el navegador soporta las notificaciones
    alert("Editar")
}

}
