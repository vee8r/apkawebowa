import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environments} from "../../../environments/environments";
import {Reservation} from "../models/Reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  headers = new HttpHeaders({
    'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
    'Authorization': 'Basic ' + btoa("user"+':' + "password")
  });
  options = {headers: this.headers};

  constructor(private httpClient: HttpClient) {
  }

  public getAllReservations(): Observable<Array<Reservation>> {

    return this.httpClient.get<Array<Reservation>>(`${environments.apiEndpoint}/reservations`, this.options);
  }

  public createReservation(reservation: Reservation): Observable<Reservation> {
    return this.httpClient.post<Reservation>(`${environments.apiEndpoint}/reservations`, reservation, this.options);
  }
}
