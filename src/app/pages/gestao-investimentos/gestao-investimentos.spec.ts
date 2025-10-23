import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoInvestimentos } from './gestao-investimentos';

describe('GestaoInvestimentos', () => {
  let component: GestaoInvestimentos;
  let fixture: ComponentFixture<GestaoInvestimentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoInvestimentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoInvestimentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
