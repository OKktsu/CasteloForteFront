import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingdomsSeed } from './kingdoms-seed';

describe('KingdomsSeed', () => {
  let component: KingdomsSeed;
  let fixture: ComponentFixture<KingdomsSeed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KingdomsSeed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KingdomsSeed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
