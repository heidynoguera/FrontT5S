import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FormsService } from '../services/forms.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  private breakpointObserver = inject(BreakpointObserver);

  constructor(public formService: FormsService) {
  }

  avatarname: string = '';

  //avatar = new BehaviorSubject<string>(localStorage.getItem('nombre')).subscribe((x) => { this.avatarname = x });

  ngOnInit() {
    // Suscribirse a los cambios en el nombre de usuario
    this.formService.currentUserName.subscribe(name => {
      this.avatarname = name;
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
