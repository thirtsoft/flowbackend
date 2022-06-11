import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbreVentePeerYearComponent } from './nbre-vente-peer-year.component';

describe('NbreVentePeerYearComponent', () => {
  let component: NbreVentePeerYearComponent;
  let fixture: ComponentFixture<NbreVentePeerYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbreVentePeerYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbreVentePeerYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
