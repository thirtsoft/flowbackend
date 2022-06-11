import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbreVentePeerMonthComponent } from './nbre-vente-peer-month.component';

describe('NbreVentePeerMonthComponent', () => {
  let component: NbreVentePeerMonthComponent;
  let fixture: ComponentFixture<NbreVentePeerMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbreVentePeerMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbreVentePeerMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
