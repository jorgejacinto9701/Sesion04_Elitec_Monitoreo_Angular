import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraCliente } from './registra-cliente';

describe('RegistraCliente', () => {
  let component: RegistraCliente;
  let fixture: ComponentFixture<RegistraCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistraCliente],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistraCliente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
