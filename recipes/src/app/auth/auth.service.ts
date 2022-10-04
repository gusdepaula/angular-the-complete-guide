import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthResponseData {
  king: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}
  signup() {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyAek2q2RYGkhiUxkI28O_CcfzCUACtJUnE',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
