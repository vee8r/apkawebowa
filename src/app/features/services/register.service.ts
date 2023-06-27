import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";
import {Observable} from "rxjs";

import {environments} from "../../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  public createUser(user: User): Observable<User> {

    return this.httpClient.post<User>(`${environments.apiEndpoint}/users`,
      user);
  }
}
