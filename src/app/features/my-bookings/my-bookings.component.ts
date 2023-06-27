import { Component } from '@angular/core';
import {ReservationService} from "../services/reservation.service";
import {Reservation} from "../models/Reservation";
import {DataSource} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent {
  private reservations: Array<Reservation> = [];
  displayedColumns: string[] = ['start', 'end'];
  dataSource: DataSource<Reservation> = new MatTableDataSource(this.reservations);

  constructor(private reservationService: ReservationService) {
    this.reservationService.getAllReservations().subscribe(
      value => {
      this.reservations = value;
      this.dataSource = new MatTableDataSource(this.reservations);
      }
    )
  }

}
