import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListZoneLivraisonComponent } from './list-zone-livraison.component';

describe('ListZoneLivraisonComponent', () => {
  let component: ListZoneLivraisonComponent;
  let fixture: ComponentFixture<ListZoneLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListZoneLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListZoneLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
