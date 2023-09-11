import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarMateriaComponent } from './reservar-materia.component';

describe('ReservarMateriaComponent', () => {
  let component: ReservarMateriaComponent;
  let fixture: ComponentFixture<ReservarMateriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservarMateriaComponent]
    });
    fixture = TestBed.createComponent(ReservarMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
