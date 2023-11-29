import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormPagoComponent } from 'src/app/Form/form-pago/form-pago.component';
import { FormsService } from 'src/app/services/forms.service';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forma-pago',
  templateUrl: './forma-pago.component.html',
  styleUrls: ['./forma-pago.component.css']
})
export class FormaPagoComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public api: RestService, public dialog: MatDialog, public FormService: FormsService) {

    this.dataSource = new MatTableDataSource();

  }
  ngOnInit(): void {

    this.api.Get("FormaPagoes").then((res) => {

      for (let index = 0; index < res.length; index++) {
        this.loadTable([res[index]])
      }

      this.dataSource.data = res;

    })

  }

  openDialog() {
    const dialogRef = this.dialog.open(FormPagoComponent);
  }

  loadTable(data: any[]) {
    this.displayedColumns = [];
    for (let column in data[0]) {
      this.displayedColumns.push(column)
    }
    this.displayedColumns.push("Editar", "Delete")
  }

  ngAfterViewInit(): void {



    this.dataSource.paginator = this.paginator;

    this.dataSource.sort = this.sort;

    this.paginator._intl.itemsPerPageLabel = 'Elementos por página';

    this.dataSource.paginator = this.paginator;



    // Cambiar el formato de la etiqueta de rango directamente

    this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {

      if (length === 0 || pageSize === 0) {

        return `0 de ${length}`;

      }



      length = Math.max(length, 0);



      const startIndex = page * pageSize;

      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;



      return `${startIndex + 1} - ${endIndex} de ${length}`;

    };

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public crearFormaPago(nuevoFormaPago: any) {
    this.api.Post("FormaPagoes", nuevoFormaPago);
  }

  public get() {
    this.api.Get("FormaPagoes");
  }

  public actualizarFormaPagoes(idPago: number) {
    const newData = { /* tus datos a actualizar */ };

    // Llama al método Put del servicio RestService.
    this.api.Put("FormaPagoes", idPago, newData);
  }

  mostrarNotificacionDelete(idPago: number, TipodePago: any, valoraPagar: any) {
    // Verificar si el navegador soporta las notificaciones
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(TipodePago)
        // Llama al servicio REST para actualizar el estado de la forma de pago a "Inactivo"
        this.api.Put('FormaPagoes', idPago, { idPago, TipoPago: TipodePago, valoraPagar: valoraPagar, estado: 'Inactivo' });
        Swal.fire('Eliminado', 'El elemento ha sido eliminado.', 'success');
        // Actualiza la lista de forma de pago para reflejar el cambio
        this.api.Get('FormaPagoes').then((res) => {
          this.dataSource.data = res;
        });
      }
    });
  }

  mostrarNotificacionEdit() {
    // Verificar si el navegador soporta las notificaciones
    Swal.fire({
      title: '¿Deseas guardar los cambios?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No Guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Guardado!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Los cambios no se han guardado', '', 'info')
      }
    })
  }

  onEdit(element: any) {
    this.FormService.title = 'Editar'
    this.dialog.open(FormPagoComponent)
    console.log(element);

    this.FormService.formaPago = element
    console.log(element.id);


  }

  //public async deleteFormaPagoes(idPago: string) {

  //const response = await this.api.Delete("FormaPagoes", "2");

  //}
}
