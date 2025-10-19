import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {

  loginObject: any = {
    userName: '',
    password: ''
  }

  router = inject(Router)
  snackBar = inject(MatSnackBar)

 

  onLogin() {

    if (this.loginObject.userName == 'admin' && this.loginObject.password == '12345') {
      this.router.navigateByUrl("/dashboard")
      this.snackBar.open('Logged in successfully!', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    } else {
      this.snackBar.open('Invalid credentials!', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    }
  }
}
