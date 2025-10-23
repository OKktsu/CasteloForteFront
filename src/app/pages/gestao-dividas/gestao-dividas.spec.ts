import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoDividas } from './gestao-dividas';

describe('GestaoDividas', () => {
  let component: GestaoDividas;
  let fixture: ComponentFixture<GestaoDividas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoDividas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoDividas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
