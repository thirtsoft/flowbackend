import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternauteComponent } from './internaute.component';

describe('InternauteComponent', () => {
  let component: InternauteComponent;
  let fixture: ComponentFixture<InternauteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternauteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternauteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
