import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarTutoriaComponent } from './reservar-tutoria.component';

describe('ReservarTutoriaComponent', () => {
  let component: ReservarTutoriaComponent;
  let fixture: ComponentFixture<ReservarTutoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservarTutoriaComponent]
    });
    fixture = TestBed.createComponent(ReservarTutoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
