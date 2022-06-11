import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailToNewsletterComponent } from './mail-to-newsletter.component';

describe('MailToNewsletterComponent', () => {
  let component: MailToNewsletterComponent;
  let fixture: ComponentFixture<MailToNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailToNewsletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailToNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
