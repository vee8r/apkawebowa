import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingCalendarComponent } from './features/booking-calendar/booking-calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  DefaultMatCalendarRangeStrategy,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
  MatCalendar, MatDatepickerModule
} from "@angular/material/datepicker";
import {MatCardModule} from "@angular/material/card";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import { GalleryComponent } from './features/gallery/gallery.component';
import { LoginPanelComponent } from './features/login-panel/login-panel.component';
import { BookingDetailsComponent } from './features/booking-details/booking-details.component';
import {RouterModule} from "@angular/router";
import { HomePageComponent } from './features/home-page/home-page.component';
import { RegisterComponent } from './features/register/register.component';
import { MyBookingsComponent } from './features/my-bookings/my-bookings.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {MatButton, MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    BookingCalendarComponent,
    GalleryComponent,
    LoginPanelComponent,
    BookingDetailsComponent,
    HomePageComponent,
    RegisterComponent,
    MyBookingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    RouterModule.forRoot( [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path:'login',
        component:LoginPanelComponent
      },
      {
        path:'register',
        component: RegisterComponent
      },
      {
        path: 'bookings',
        component: MyBookingsComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      }
    ],{})
  ],
  providers: [
    {
      provide:MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: DefaultMatCalendarRangeStrategy,
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'pl-PL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
