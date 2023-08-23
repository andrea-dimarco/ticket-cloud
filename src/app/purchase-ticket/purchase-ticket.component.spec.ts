import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseTicketComponent } from './purchase-ticket.component';

describe('PurchaseTicketComponent', () => {
  let component: PurchaseTicketComponent;
  let fixture: ComponentFixture<PurchaseTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseTicketComponent]
    });
    fixture = TestBed.createComponent(PurchaseTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
