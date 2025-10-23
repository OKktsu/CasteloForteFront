import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPro } from './business-pro';

describe('BusinessPro', () => {
  let component: BusinessPro;
  let fixture: ComponentFixture<BusinessPro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessPro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessPro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
