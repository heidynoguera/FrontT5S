import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorMateriaComponent } from './tutor-materia.component';

describe('TutorMateriaComponent', () => {
  let component: TutorMateriaComponent;
  let fixture: ComponentFixture<TutorMateriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorMateriaComponent]
    });
    fixture = TestBed.createComponent(TutorMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
