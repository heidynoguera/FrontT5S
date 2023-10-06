import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.css']
})
export class RepositorioComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public api: RestService){
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    this.api.Get("Repositorios").then((res) => {

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
    this.api.Get("Repositorios");
  }

//actualizar datos
  public putRepositorio(idRepositorio: number) { 
    const newData = { /* tus datos a actualizar */ };
    this.api.Put("Repositorios", idRepositorio, newData);
  }
  //crear datos
  public postRepositorio(newRepositorio : any) {
    this.api.Post("Repositorios", newRepositorio);
  }
  //borrar datos
  public async deleteRepositorio(IdRepositorio: string) {
    const response = await this.api.Delete("Repositorios", IdRepositorio);
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