import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBookingComponent } from './products-booking.component';

describe('ProductsBookingComponent', () => {
  let component: ProductsBookingComponent;
  let fixture: ComponentFixture<ProductsBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
