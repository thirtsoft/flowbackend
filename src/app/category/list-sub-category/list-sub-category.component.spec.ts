import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubCategoryComponent } from './list-sub-category.component';

describe('ListSubCategoryComponent', () => {
  let component: ListSubCategoryComponent;
  let fixture: ComponentFixture<ListSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSubCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
