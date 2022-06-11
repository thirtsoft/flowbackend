import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeliveryAddressComponent } from './list-delivery-address.component';

describe('ListDeliveryAddressComponent', () => {
  let component: ListDeliveryAddressComponent;
  let fixture: ComponentFixture<ListDeliveryAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDeliveryAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeliveryAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
