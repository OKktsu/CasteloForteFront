import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLeads } from './dashboard-leads';

describe('DashboardLeads', () => {
  let component: DashboardLeads;
  let fixture: ComponentFixture<DashboardLeads>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardLeads]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLeads);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
