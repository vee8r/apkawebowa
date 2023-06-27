import {Component} from '@angular/core';
import {DateRange} from "@angular/material/datepicker";

@Component({
  selector: 'app-booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.css']
})
export class BookingCalendarComponent {
  selectedDateRange: DateRange<Date> = new DateRange(new Date(), null);

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

  getFormatedDate(date: any) {
    if(date!=null)
    return date.toDateString();
    else
      return "";
  }
}
