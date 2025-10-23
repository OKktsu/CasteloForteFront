import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancoPatrimonial } from './balanco-patrimonial';

describe('BalancoPatrimonial', () => {
  let component: BalancoPatrimonial;
  let fixture: ComponentFixture<BalancoPatrimonial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalancoPatrimonial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalancoPatrimonial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
