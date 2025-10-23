import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelControleCastelo } from './painel-controle-castelo';

describe('PainelControleCastelo', () => {
  let component: PainelControleCastelo;
  let fixture: ComponentFixture<PainelControleCastelo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelControleCastelo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelControleCastelo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
