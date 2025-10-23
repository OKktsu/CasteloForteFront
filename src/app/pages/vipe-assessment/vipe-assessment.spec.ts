import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipeAssessment } from './vipe-assessment';

describe('VipeAssessment', () => {
  let component: VipeAssessment;
  let fixture: ComponentFixture<VipeAssessment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VipeAssessment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VipeAssessment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
