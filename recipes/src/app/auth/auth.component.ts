import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLogingMode = true;

  onSwitchMode() {
    this.isLogingMode = !this.isLogingMode;
  }
}
