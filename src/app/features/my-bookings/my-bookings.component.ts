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
  displayedColumns: string[] = ['start', 'end', 'price','menu'];
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
    if(element.id!=null) {
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

  getReservationsPrice(element: Reservation) {
    if(element.priceEntry != null) {
      switch (element.priceEntry.price) {
        case 500:
          return "Domek MIĘTA- 500zł/noc";
          break;
        case 750:
          return "Domek MIĘTA + strefa SPA- 750zł/noc";
          break;
        case 600:
          return "Domek GRADIENT- 600zł/noc";
          break;
        case 850:
          return "Domek GRADIENT + strefa SPA- 850zł/noc";
          break;
        default:
          return "Błąd";
      }
    } else {
      return 0;
    }
  }

  displayDate(date: any) {
    if(date!=null && date.length>10) {
      return date.substring(0,10);
    } else {
      return "";
    }

  }
}
