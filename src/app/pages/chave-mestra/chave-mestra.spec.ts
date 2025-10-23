import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaveMestra } from './chave-mestra';

describe('ChaveMestra', () => {
  let component: ChaveMestra;
  let fixture: ComponentFixture<ChaveMestra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaveMestra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaveMestra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
