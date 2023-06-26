import { Component } from '@angular/core';

class RegisterCommand {
  login : string= "";
  password: string="";
  firstName: string="";
  lastName: string="";
  email: string="";

}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerCommand = new RegisterCommand();

  onSubmit() {

  }
}
