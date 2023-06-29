import {Component} from '@angular/core';
import {User} from "../models/User";
import {RegisterService, SignUpRequest} from "../services/register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerCommand = new SignUpRequest();

  constructor(private registerService: RegisterService,
              private router: Router) {

  }

  onSubmit() {
    this.registerService.signup(this.registerCommand).subscribe(
      value => {
        localStorage.setItem('token', value.token);
        this.router.navigateByUrl("/bookings")

      }
    );
  }
}
