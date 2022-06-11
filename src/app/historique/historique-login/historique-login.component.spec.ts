import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueLoginComponent } from './historique-login.component';

describe('HistoriqueLoginComponent', () => {
  let component: HistoriqueLoginComponent;
  let fixture: ComponentFixture<HistoriqueLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
