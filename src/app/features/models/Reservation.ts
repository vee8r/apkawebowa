import {User} from "./User";

export class Reservation{
  private _id: number;
  private _reservationDate: Date;
  private _stayStartDate: Date;
  private _stayEndDate: Date;
  private _user: User;


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

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  constructor(id: number, reservationDate: Date, stayStartDate: Date, stayEndDate: Date, user: User) {
    this._id = id;
    this._reservationDate = reservationDate;
    this._stayStartDate = stayStartDate;
    this._stayEndDate = stayEndDate;
    this._user = user;
  }
}
