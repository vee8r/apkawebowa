import { Component } from '@angular/core';
import {AuthService} from "./features/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apka-webowa';

  constructor(public authService: AuthService) {
  }

}
