import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ReservationService} from "../services/reservation.service";
import {Reservation} from "../models/Reservation";
import {FormBuilder, FormControl} from "@angular/forms";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {addHours} from "../booking-calendar/booking-calendar.component";

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent {
  private reservation: Reservation;
  bookingForm: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Reservation,
              private reservationService: ReservationService,
              private formBuilder: FormBuilder,
              private dialog: MatDialog) {

    this.reservation = data;
    this.bookingForm = this.formBuilder.group({
        startDate: new FormControl(this.reservation.stayStartDate),
        endDate: new FormControl(this.reservation.stayEndDate),
      }
    );
  }

  setStart(event: MatDatepickerInputEvent<Date>) {
    if (event.value != null)
      this.reservation.stayStartDate = addHours(event.value, 12);
  }

  setEnd(event: MatDatepickerInputEvent<Date>) {
    if (event.value != null)
      this.reservation.stayEndDate = addHours(event.value, 12);
  }


  save() {
    this.reservationService.updateReservation(this.reservation).subscribe(
      value => {
        this.dialog.closeAll();
      }
    )

  }
}
