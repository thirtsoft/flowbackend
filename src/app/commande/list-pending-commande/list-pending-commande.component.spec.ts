import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPendingCommandeComponent } from './list-pending-commande.component';

describe('ListPendingCommandeComponent', () => {
  let component: ListPendingCommandeComponent;
  let fixture: ComponentFixture<ListPendingCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPendingCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPendingCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
