import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCorreoComponent } from './form-correo.component';

describe('FormCorreoComponent', () => {
  let component: FormCorreoComponent;
  let fixture: ComponentFixture<FormCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCorreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
