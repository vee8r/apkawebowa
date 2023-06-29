import { Component } from '@angular/core';
import {ReservationService} from "../services/reservation.service";
import {Reservation} from "../models/Reservation";
import {DataSource} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {BookingDetailsComponent} from "../booking-details/booking-details.component";

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent {
  private reservations: Array<Reservation> = [];
  displayedColumns: string[] = ['start', 'end', 'menu'];
  dataSource: DataSource<Reservation> = new MatTableDataSource(this.reservations);

  constructor(private reservationService: ReservationService,
              private dialog: MatDialog) {
    this.getReservations();
  }

  private getReservations() {
    this.reservationService.getAllReservations().subscribe(
      value => {
        this.reservations = value;
        this.dataSource = new MatTableDataSource(this.reservations);
      }
    )
  }

  setBookings($event: any) {
    this.reservations = $event;
    this.dataSource = new MatTableDataSource(this.reservations);
  }

  delete(element: Reservation) {
    this.reservationService.deleteReservation(element.id).subscribe(
      value => {
        this.reservationService.getAllReservations().subscribe(
          value => {
            this.reservations = value;
            this.dataSource = new MatTableDataSource(this.reservations);
          }
        )
      }
    )
  }

  edit(element: Reservation) {
      const dialogRef = this.dialog.open(BookingDetailsComponent, {
        data: element,
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.getReservations();
      });
    }

}
