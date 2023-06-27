import {Component} from '@angular/core';
import {User} from "../models/User";
import {RegisterService} from "../services/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerCommand = new User();

  constructor(private registerService: RegisterService) {

  }

  onSubmit() {
    this.registerService.createUser(this.registerCommand).subscribe(
      value => {
      }
    );
  }
}
