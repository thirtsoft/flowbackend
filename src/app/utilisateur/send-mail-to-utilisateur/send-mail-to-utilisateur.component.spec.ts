import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMailToUtilisateurComponent } from './send-mail-to-utilisateur.component';

describe('SendMailToUtilisateurComponent', () => {
  let component: SendMailToUtilisateurComponent;
  let fixture: ComponentFixture<SendMailToUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendMailToUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMailToUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
