import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioCasteloForte } from './relatorio-castelo-forte';

describe('RelatorioCasteloForte', () => {
  let component: RelatorioCasteloForte;
  let fixture: ComponentFixture<RelatorioCasteloForte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioCasteloForte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioCasteloForte);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
