import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiffAffOrderPeerYearComponent } from './chiff-aff-order-peer-year.component';

describe('ChiffAffOrderPeerYearComponent', () => {
  let component: ChiffAffOrderPeerYearComponent;
  let fixture: ComponentFixture<ChiffAffOrderPeerYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiffAffOrderPeerYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiffAffOrderPeerYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
