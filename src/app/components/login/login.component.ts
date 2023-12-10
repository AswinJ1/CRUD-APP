import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from 'src/app/service/auth-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private builder: FormBuilder,private _snackBar: MatSnackBar
    ,private toastr: ToastrService, private service: AuthService,
    private router: Router) {
      sessionStorage.clear();

  }
  result: any;

  loginform = this.builder.group({
    id: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });
  openSnackBar(message: string): void {
    this._snackBar.open(message, 'Close', {
      duration: 2000,
    });}
  proceedlogin() {
    if (this.loginform.valid) {
      if (this.loginform.value.id === 'admin' && this.loginform.value.password === 'abc') {
        // Only allow login for the user with username 'admin' and password 'abc'
        sessionStorage.setItem('username', 'admin');
        sessionStorage.setItem('role', 'admin'); // You can set the role as needed
        this.router.navigate(['']);
      } else {
        this.toastr.error('Invalid credentials');
      }
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  }
}  