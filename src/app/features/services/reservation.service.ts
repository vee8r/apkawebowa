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
    'Content-type': 'application/json'
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

  public deleteReservation(id: number): Observable<Reservation> {
    return this.httpClient.delete<Reservation>(`${environments.apiEndpoint}/reservations/${id}`, this.options);
  }

  public updateReservation(reservation: Reservation): Observable<Reservation> {
    return this.httpClient.put<Reservation>(`${environments.apiEndpoint}/reservations/${reservation.id}`, reservation, this.options);
  }
}
