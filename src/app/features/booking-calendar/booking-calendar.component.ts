import {Component, EventEmitter, Output} from '@angular/core';
import {DateRange} from "@angular/material/datepicker";
import {ReservationService} from "../services/reservation.service";
import {Payment, PriceEntry, Reservation} from "../models/Reservation";
import {Router} from "@angular/router";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.css']
})
export class BookingCalendarComponent {
  @Output() bookings: EventEmitter<Array<Reservation>> = new EventEmitter<Array<Reservation>>();
  selectedDateRange: DateRange<Date> = new DateRange(new Date(), null);
  private price: any;
  selected = "ONE";

  constructor(private reservationService: ReservationService,
              private router: Router) {
  }

  onSelectedChange(date: Date) {
    if (
      this.selectedDateRange &&
      this.selectedDateRange.start &&
      date > this.selectedDateRange.start &&
      !this.selectedDateRange.end
    ) {
      this.selectedDateRange = new DateRange(
        this.selectedDateRange.start,
        date
      );
    } else {
      this.selectedDateRange = new DateRange(date, null);
    }
  }


  createReservation() {
    if (this.selectedDateRange.start != null && this.selectedDateRange.end != null) {
      var reservation = new Reservation();
      reservation.stayStartDate = addHours(this.selectedDateRange.start,12);
      reservation.stayEndDate = addHours(this.selectedDateRange.end, 12);
      reservation.priceEntry = this.getPrice(this.price);

      this.reservationService.createReservation(reservation).subscribe(
        value => {
          this.reservationService.getAllReservations().subscribe(
            value => {
              this.bookings.emit(value);
            }
          )
        }
      )
      ;
    }
  }



  setPrice($event: MatSelectChange) {
    this.price = $event.value;
  }

  private getPrice(price: any): PriceEntry {
    switch (price) {
      case 'ONE':
        return {price: 500};
        break;
      case 'ONEPLUS':
        return {price: 750};
        break;
      case 'TWO':
        return {price: 600};
        break;
      case 'TWOPLUS':
        return {price: 850};
        break;
      default:
        return {price: 500};
    }

  }
}

export const addHours = (date: Date, hours: number): Date => {
  const result = new Date(date);
  result.setHours(result.getHours() + hours);
  return result;
};
