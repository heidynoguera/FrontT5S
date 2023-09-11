import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioComponent } from './repositorio.component';

describe('RepositorioComponent', () => {
  let component: RepositorioComponent;
  let fixture: ComponentFixture<RepositorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepositorioComponent]
    });
    fixture = TestBed.createComponent(RepositorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
