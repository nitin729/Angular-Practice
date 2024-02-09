import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private route: Router) {}
  onLogin(event: any) {
    if (event) {
      this.route.navigate(['/contact']);
    } else {
      this.route.navigate(['/']);
    }

    console.log(event);
  }
}
