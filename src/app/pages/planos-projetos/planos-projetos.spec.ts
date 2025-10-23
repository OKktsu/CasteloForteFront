import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosProjetos } from './planos-projetos';

describe('PlanosProjetos', () => {
  let component: PlanosProjetos;
  let fixture: ComponentFixture<PlanosProjetos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanosProjetos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanosProjetos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
