import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedUtilisateurComponent } from './activated-utilisateur.component';

describe('ActivatedUtilisateurComponent', () => {
  let component: ActivatedUtilisateurComponent;
  let fixture: ComponentFixture<ActivatedUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivatedUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatedUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
