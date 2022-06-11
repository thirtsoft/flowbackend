import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiffAffOrderPeerMonthComponent } from './chiff-aff-order-peer-month.component';

describe('ChiffAffOrderPeerMonthComponent', () => {
  let component: ChiffAffOrderPeerMonthComponent;
  let fixture: ComponentFixture<ChiffAffOrderPeerMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiffAffOrderPeerMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiffAffOrderPeerMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
