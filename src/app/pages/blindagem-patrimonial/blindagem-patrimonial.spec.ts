import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindagemPatrimonial } from './blindagem-patrimonial';

describe('BlindagemPatrimonial', () => {
  let component: BlindagemPatrimonial;
  let fixture: ComponentFixture<BlindagemPatrimonial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlindagemPatrimonial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlindagemPatrimonial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
