import {Component} from '@angular/core';
import {DateRange} from "@angular/material/datepicker";
import {ReservationService} from "../services/reservation.service";
import {Reservation} from "../models/Reservation";

@Component({
  selector: 'app-booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.css']
})
export class BookingCalendarComponent {
  selectedDateRange: DateRange<Date> = new DateRange(new Date(), null);

  constructor(private reservationService: ReservationService) {
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
      reservation.stayStartDate = this.selectedDateRange.start;
      reservation.stayEndDate = this.selectedDateRange.end;

      this.reservationService.createReservation(reservation).subscribe(
        value => {
        }
      );
    }
  }


}
