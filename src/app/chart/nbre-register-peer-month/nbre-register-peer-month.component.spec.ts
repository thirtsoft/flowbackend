import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbreRegisterPeerMonthComponent } from './nbre-register-peer-month.component';

describe('NbreRegisterPeerMonthComponent', () => {
  let component: NbreRegisterPeerMonthComponent;
  let fixture: ComponentFixture<NbreRegisterPeerMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbreRegisterPeerMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbreRegisterPeerMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
