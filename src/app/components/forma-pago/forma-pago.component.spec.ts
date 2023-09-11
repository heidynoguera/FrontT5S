import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaPagoComponent } from './forma-pago.component';

describe('FormaPagoComponent', () => {
  let component: FormaPagoComponent;
  let fixture: ComponentFixture<FormaPagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormaPagoComponent]
    });
    fixture = TestBed.createComponent(FormaPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
