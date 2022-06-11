import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPayedCommandeComponent } from './list-payed-commande.component';

describe('ListPayedCommandeComponent', () => {
  let component: ListPayedCommandeComponent;
  let fixture: ComponentFixture<ListPayedCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPayedCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPayedCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
