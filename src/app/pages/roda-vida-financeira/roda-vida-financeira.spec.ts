import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodaVidaFinanceira } from './roda-vida-financeira';

describe('RodaVidaFinanceira', () => {
  let component: RodaVidaFinanceira;
  let fixture: ComponentFixture<RodaVidaFinanceira>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RodaVidaFinanceira]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RodaVidaFinanceira);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
