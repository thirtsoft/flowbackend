import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfileOfUtilisateurComponent } from './update-profile-of-utilisateur.component';

describe('UpdateProfileOfUtilisateurComponent', () => {
  let component: UpdateProfileOfUtilisateurComponent;
  let fixture: ComponentFixture<UpdateProfileOfUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProfileOfUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfileOfUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
