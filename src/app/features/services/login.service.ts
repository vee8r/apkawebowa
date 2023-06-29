import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {environments} from "../../../environments/environments";
import {Router} from "@angular/router";

class LoginResponse {
  token: string = "";
}

export class LoginRequest {
  private email: string;
  private password: string;

  constructor(username: string, password: string) {
    this.email = username;
    this.password = password;
  }

}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient,
              private router: Router) {
  }

  async login(username: string, password: string) {
    const loginRequest = new LoginRequest(username, password);
    const [response] = await Promise.all([this.httpClient.post<LoginResponse>(`${environments.apiEndpoint}/auth/signin`, loginRequest)]);
    response.subscribe(value => {
      this.extractAuthenticationResponse(value);
      this.router.navigateByUrl("/bookings")
    })
  }

  private extractAuthenticationResponse(response: LoginResponse) {
    localStorage.setItem('token', response.token);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }

}
