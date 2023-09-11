import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeografiaComponent } from './geografia.component';

describe('GeografiaComponent', () => {
  let component: GeografiaComponent;
  let fixture: ComponentFixture<GeografiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeografiaComponent]
    });
    fixture = TestBed.createComponent(GeografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
