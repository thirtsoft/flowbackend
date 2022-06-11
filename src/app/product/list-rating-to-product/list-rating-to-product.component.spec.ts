import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRatingToProductComponent } from './list-rating-to-product.component';

describe('ListRatingToProductComponent', () => {
  let component: ListRatingToProductComponent;
  let fixture: ComponentFixture<ListRatingToProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRatingToProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRatingToProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
