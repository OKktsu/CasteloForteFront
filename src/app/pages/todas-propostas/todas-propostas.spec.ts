import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasPropostas } from './todas-propostas';

describe('TodasPropostas', () => {
  let component: TodasPropostas;
  let fixture: ComponentFixture<TodasPropostas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodasPropostas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodasPropostas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
