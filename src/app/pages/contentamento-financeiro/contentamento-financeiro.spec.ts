import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentamentoFinanceiro } from './contentamento-financeiro';

describe('ContentamentoFinanceiro', () => {
  let component: ContentamentoFinanceiro;
  let fixture: ComponentFixture<ContentamentoFinanceiro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentamentoFinanceiro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentamentoFinanceiro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
