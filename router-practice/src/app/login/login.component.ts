import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @Output() handleLogin = new EventEmitter();

  isLoggedIn: boolean = false;

  login() {
    this.isLoggedIn = true;
    this.handleLogin.emit(this.isLoggedIn);
  }
  logout() {
    this.isLoggedIn = false;
    this.handleLogin.emit(this.isLoggedIn);
  }
}
