import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipeId } from './vipe-id';

describe('VipeId', () => {
  let component: VipeId;
  let fixture: ComponentFixture<VipeId>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VipeId]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VipeId);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
