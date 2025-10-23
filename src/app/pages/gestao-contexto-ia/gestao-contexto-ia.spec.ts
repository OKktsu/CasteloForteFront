import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoContextoIa } from './gestao-contexto-ia';

describe('GestaoContextoIa', () => {
  let component: GestaoContextoIa;
  let fixture: ComponentFixture<GestaoContextoIa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoContextoIa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoContextoIa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
