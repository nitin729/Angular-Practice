import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private router: Router) {}
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      });
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
    this.router.navigate(['/servers']);
  }
  logout() {
    this.loggedIn = false;
    this.router.navigate(['/logout']);
  }
}
