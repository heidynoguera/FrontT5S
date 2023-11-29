import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormaPagoComponent } from './components/forma-pago/forma-pago.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { LoginComponent } from './components/login/login.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { TutorComponent } from './components/tutor/tutor.component';
import { MateriaComponent } from './components/materia/materia.component';
import { TutorMateriaComponent } from './components/tutor-materia/tutor-materia.component';
import { GeografiaComponent } from './components/geografia/geografia.component';
import { ReservarTutoriaComponent } from './components/reservar-tutoria/reservar-tutoria.component';
import { RepositorioComponent } from './components/repositorio/repositorio.component';
import { IncioSesionFormComponent } from './Form/incio-sesion-form/incio-sesion-form.component';
<<<<<<< HEAD
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
=======
import { FormRegistroComponent } from './Form/form-registro/form-registro.component';
import { FormRecuperarPasswordComponent } from './Form/form-recuperar-password/form-recuperar-password.component';
>>>>>>> origin/main



const routes: Routes = [
  {path: '', redirectTo: '/Iniciar Sesion', pathMatch: 'full' },
  {path: "formapago", component: FormaPagoComponent},
  {path: "calendario", component: CalendarioComponent},
  {path: "login", component: LoginComponent},
  {path: "estudiantes", component: EstudianteComponent},
  {path: "Tutor", component: TutorComponent},
  {path: "Materia", component: MateriaComponent},
  {path: "TutorMateria", component: TutorMateriaComponent},
  {path: "geografia", component: GeografiaComponent},
  {path: "reservaTutoria", component: ReservarTutoriaComponent},
  {path: "repositorio", component: RepositorioComponent},
  {path: "Registro", component: FormRegistroComponent},
  {path: "RecuperarPassword", component: FormRecuperarPasswordComponent},
  {path: "Iniciar Sesion", component: IncioSesionFormComponent},
  {path: 'bienvenida', component: BienvenidaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
