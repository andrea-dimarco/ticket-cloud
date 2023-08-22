import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSearchboxComponent } from './event-searchbox.component';

describe('EventSearchboxComponent', () => {
  let component: EventSearchboxComponent;
  let fixture: ComponentFixture<EventSearchboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventSearchboxComponent]
    });
    fixture = TestBed.createComponent(EventSearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
