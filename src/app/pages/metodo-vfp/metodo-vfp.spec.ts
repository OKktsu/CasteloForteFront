import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoVfp } from './metodo-vfp';

describe('MetodoVfp', () => {
  let component: MetodoVfp;
  let fixture: ComponentFixture<MetodoVfp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetodoVfp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetodoVfp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
