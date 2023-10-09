import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneLivraisonComponent } from './zone-livraison.component';

describe('ZoneLivraisonComponent', () => {
  let component: ZoneLivraisonComponent;
  let fixture: ComponentFixture<ZoneLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
