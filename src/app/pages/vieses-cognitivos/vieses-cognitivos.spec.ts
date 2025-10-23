import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViesesCognitivos } from './vieses-cognitivos';

describe('ViesesCognitivos', () => {
  let component: ViesesCognitivos;
  let fixture: ComponentFixture<ViesesCognitivos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViesesCognitivos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViesesCognitivos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
