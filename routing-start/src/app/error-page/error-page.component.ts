import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css',
})
export class ErrorPageComponent {
  errorMessage: string = '';

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.errorMessage = data['message'];
    });
  }
}
