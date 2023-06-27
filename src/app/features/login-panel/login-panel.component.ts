import {Component} from '@angular/core';
import {RegisterService} from "../services/register.service";
import {LoginService} from "../services/login.service";

export class LoginCommand {
  login: string = "";
  password: string = "";
}

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent {
  loginCommand = new LoginCommand();

  constructor(private loginService: LoginService) {

  }
  onSubmit() {
    this.loginService.login(this.loginCommand.login, this.loginCommand.password);
  }
}
