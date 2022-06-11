import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailToUtilisateurComponent } from './mail-to-utilisateur.component';

describe('MailToUtilisateurComponent', () => {
  let component: MailToUtilisateurComponent;
  let fixture: ComponentFixture<MailToUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailToUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailToUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
