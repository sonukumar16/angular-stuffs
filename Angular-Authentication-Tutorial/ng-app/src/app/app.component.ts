import { Component } from '@angular/core';
import { AuthService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-app2';
  constructor(public authService: AuthService) {}
}
