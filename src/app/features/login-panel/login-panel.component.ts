import {Component} from '@angular/core';

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

  onSubmit() {

  }
}
