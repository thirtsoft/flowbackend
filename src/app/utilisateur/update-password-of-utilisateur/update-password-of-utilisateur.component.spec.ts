import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePasswordOfUtilisateurComponent } from './update-password-of-utilisateur.component';

describe('UpdatePasswordOfUtilisateurComponent', () => {
  let component: UpdatePasswordOfUtilisateurComponent;
  let fixture: ComponentFixture<UpdatePasswordOfUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePasswordOfUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePasswordOfUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
