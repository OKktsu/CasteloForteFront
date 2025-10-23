import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradorPropostas } from './gerador-propostas';

describe('GeradorPropostas', () => {
  let component: GeradorPropostas;
  let fixture: ComponentFixture<GeradorPropostas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeradorPropostas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeradorPropostas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
