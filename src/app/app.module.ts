import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { TutorComponent } from './components/tutor/tutor.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { GeografiaComponent } from './components/geografia/geografia.component';
import { TutorMateriaComponent } from './components/tutor-materia/tutor-materia.component';
import { FormaPagoComponent } from './components/forma-pago/forma-pago.component';
import { MateriaComponent } from './components/materia/materia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { AvatarModule } from 'ngx-avatars';
import { ReservarTutoriaComponent } from './components/reservar-tutoria/reservar-tutoria.component';
import { RepositorioComponent } from './components/repositorio/repositorio.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormRepositorioComponent } from './Form/form-repositorio/form-repositorio.component';
import { FormReservaTutoriaComponent } from './Form/form-reserva-tutoria/form-reserva-tutoria.component';
import { FormGeografiaComponent } from './Form/form-geografia/form-geografia.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormPagoComponent } from './Form/form-pago/form-pago.component';
import { FormCalendarioComponent } from './Form/form-calendario/form-calendario.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormEstudiantesComponent } from './Form/form-estudiantes/form-estudiantes.component';
import { FormLoginComponent } from './Form/form-login/form-login.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { EditFormCalendarioComponent } from './Form-Edit/edit-form-calendario/edit-form-calendario.component';
import { IncioSesionFormComponent } from './Form/incio-sesion-form/incio-sesion-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EstudianteComponent,
    TutorComponent,
    CalendarioComponent,
    GeografiaComponent,
    TutorMateriaComponent,
    FormaPagoComponent,
    MateriaComponent,
    MenuComponent,
    ReservarTutoriaComponent,
    RepositorioComponent,
    FormGeografiaComponent,
    FormRepositorioComponent,
    FormReservaTutoriaComponent,
    FormPagoComponent,
    FormCalendarioComponent,
    FormEstudiantesComponent,
    FormLoginComponent,
    EditFormCalendarioComponent,
    IncioSesionFormComponent,
  ],
  imports: [
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    AvatarModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
