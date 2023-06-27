import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {environments} from "../../../environments/environments";
import {Router} from "@angular/router";

class LoginResponse {
  access_token: string = "";
  refresh_token: string = ""
  expires_in: number = 0;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient,
              private router: Router) {
  }

  async login(username: string, password: string) {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    params.append('grant_type', 'password');

    const response = await this.httpClient.post<LoginResponse>(`${environments.apiEndpoint}/oauth/token`, params.toString()).toPromise();
    if (response) {
      this.extractAuthenticationResponse(response);
      this.router.navigateByUrl("/bookings")
    }
  }

  private extractAuthenticationResponse(response: LoginResponse) {
    localStorage.setItem('token', response.access_token);
    localStorage.setItem('refresh_token', response.refresh_token);
    localStorage.setItem('token_expires_in', (Date.now() + response.expires_in * 1000).toString());
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('token_expires_in');
    localStorage.removeItem('stayLoggedIn');
    this.router.navigateByUrl('/');
  }

}
