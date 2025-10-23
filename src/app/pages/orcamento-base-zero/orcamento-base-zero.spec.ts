import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoBaseZero } from './orcamento-base-zero';

describe('OrcamentoBaseZero', () => {
  let component: OrcamentoBaseZero;
  let fixture: ComponentFixture<OrcamentoBaseZero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrcamentoBaseZero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrcamentoBaseZero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
