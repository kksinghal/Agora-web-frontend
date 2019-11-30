import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { UserService } from '../services/user.service';
import { Credentials } from '../model/credentials.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {
  error = false;
  message = 'Log In';
  isLoading = false;
  socialLoading = false;
  credentials: Credentials;
  trustedDevice: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.credentials = new Credentials();
    this.credentials.identifier = '';
    this.credentials.password = '';
  }

  navigateSignUp() {
    this.router.navigate(['/home']);
  }

  OnSubmit(userName, password) {
    this.message = 'Loading....';
    this.isLoading = true;
    this.error = false;
    const credentials = new Credentials();
    this.credentials.identifier = userName;
    this.credentials.password = password;
    this.trustedDevice = this.userService.getTrustedDevice();
    if (this.trustedDevice) {
      this.credentials.trustedDevice = this.trustedDevice;
    }
    console.log(this.credentials);
    this.userService.login(this.credentials).subscribe((data: any) => {
      if ('token' in data) {
        this.router.navigate(['/dashboard']);
      } else if (data.twoFactorAuthentication) {
        console.log(data);
        this.router.navigate(['two-factor-auth']);
      } else {
        this.router.navigate(['/dashboard']);
      }
    },
      (err: HttpErrorResponse) => {
        this.message = 'Log In';
        this.isLoading = false;
        this.error = true;
      });
  }
}
