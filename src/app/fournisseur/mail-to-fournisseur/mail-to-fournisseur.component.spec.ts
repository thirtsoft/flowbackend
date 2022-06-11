import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailToFournisseurComponent } from './mail-to-fournisseur.component';

describe('MailToFournisseurComponent', () => {
  let component: MailToFournisseurComponent;
  let fixture: ComponentFixture<MailToFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailToFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailToFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
