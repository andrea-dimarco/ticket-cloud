import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthButtonComponent } from './log-in.component';

describe('LogInComponent', () => {
  let component: AuthButtonComponent;
  let fixture: ComponentFixture<AuthButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthButtonComponent]
    });
    fixture = TestBed.createComponent(AuthButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
