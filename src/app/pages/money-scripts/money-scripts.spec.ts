import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyScripts } from './money-scripts';

describe('MoneyScripts', () => {
  let component: MoneyScripts;
  let fixture: ComponentFixture<MoneyScripts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyScripts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyScripts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
