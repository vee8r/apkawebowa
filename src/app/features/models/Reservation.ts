import {User} from "./User";

export type PaymentStatus = 'PAID' | 'UNPAID' | 'CANCELED';


export type PaymentMethod = 'CASH' | 'CARD' | 'TRANSFER' | 'PAYPAL' | 'BLIK';


export class Payment {
  id: number = 0;
  paymentMethod: PaymentMethod = 'CASH';
  paymentStatus: PaymentStatus = 'UNPAID';

}

export class PriceEntry{
  price: number = 0;
}

export class Reservation {
  id?: number;
  reservationDate: Date = new Date();
  stayStartDate: Date = new Date();
  stayEndDate: Date = new Date();
  payments: Array<Payment> = [];

  priceEntry: PriceEntry = new PriceEntry();


  constructor() {
  }


}
