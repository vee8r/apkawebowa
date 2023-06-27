import {User} from "./User";

export class Reservation {
  private _id: number = 0;
  private _reservationDate: Date = new Date();
  private _stayStartDate: Date = new Date();
  private _stayEndDate: Date = new Date();


  constructor() {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get reservationDate(): Date {
    return this._reservationDate;
  }

  set reservationDate(value: Date) {
    this._reservationDate = value;
  }

  get stayStartDate(): Date {
    return this._stayStartDate;
  }

  set stayStartDate(value: Date) {
    this._stayStartDate = value;
  }

  get stayEndDate(): Date {
    return this._stayEndDate;
  }

  set stayEndDate(value: Date) {
    this._stayEndDate = value;
  }

}
