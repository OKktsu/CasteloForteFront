import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoFamilia } from './codigo-familia';

describe('CodigoFamilia', () => {
  let component: CodigoFamilia;
  let fixture: ComponentFixture<CodigoFamilia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodigoFamilia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodigoFamilia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
