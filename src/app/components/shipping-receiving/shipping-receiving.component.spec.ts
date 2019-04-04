import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingReceivingComponent } from './shipping-receiving.component';

describe('ShippingReceivingComponent', () => {
  let component: ShippingReceivingComponent;
  let fixture: ComponentFixture<ShippingReceivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingReceivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingReceivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
