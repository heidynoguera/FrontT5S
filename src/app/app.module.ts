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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
