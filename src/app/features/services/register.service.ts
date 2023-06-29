import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";
import {Observable} from "rxjs";

import {environments} from "../../../environments/environments";

export class SignUpRequest {
  public firstName: string="";
  public lastName: string="";
  public email: string="";
  public password: string="";
}

export class JwtAuthenticationResponse {
  token: string="";
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  public createUser(user: User): Observable<User> {

    return this.httpClient.post<User>(`${environments.apiEndpoint}/users`,
      user);
  }
  public signup(signup: SignUpRequest): Observable<JwtAuthenticationResponse> {

    return this.httpClient.post<JwtAuthenticationResponse>(`${environments.apiEndpoint}/auth/signup`,
      signup);
  }
}
