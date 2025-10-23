import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteligenciaFinanceira } from './inteligencia-financeira';

describe('InteligenciaFinanceira', () => {
  let component: InteligenciaFinanceira;
  let fixture: ComponentFixture<InteligenciaFinanceira>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteligenciaFinanceira]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteligenciaFinanceira);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
