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
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSidenav, MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {LoginService} from "./features/services/login.service";
import {RegisterService} from "./features/services/register.service";
import {ReservationService} from "./features/services/reservation.service";
import {AuthService} from "./features/services/auth.service";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {TokenInterceptor} from "./features/services/TokenInterceptor";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";

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
    MatGridListModule,
    MatSidenavModule,
    MatMenuModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
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
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    LoginService,
    RegisterService,
    AuthService,
    ReservationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
