import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingAllComponent } from './booking-all.component';

describe('BookingAllComponent', () => {
  let component: BookingAllComponent;
  let fixture: ComponentFixture<BookingAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
