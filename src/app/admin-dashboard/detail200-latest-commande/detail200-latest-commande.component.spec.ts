import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail200LAtestCommandeComponent } from './detail200-latest-commande.component';

describe('Detail200LAtestCommandeComponent', () => {
  let component: Detail200LAtestCommandeComponent;
  let fixture: ComponentFixture<Detail200LAtestCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Detail200LAtestCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Detail200LAtestCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
