import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergiaVital } from './energia-vital';

describe('EnergiaVital', () => {
  let component: EnergiaVital;
  let fixture: ComponentFixture<EnergiaVital>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergiaVital]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergiaVital);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
