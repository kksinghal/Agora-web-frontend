import { Component, OnInit } from '@angular/core';
import { JwtService } from '../services/jwt.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { UserService } from '../services/user.service';
import { OneTimePassword } from '../model/oneTimePassword.model';
import { TwoFactorAuth} from '../model/twoFactorAuth.model';

@Component({
  selector: 'app-two-factor-auth',
  templateUrl: './two-factor-auth.component.html',
  styleUrls: ['./two-factor-auth.component.sass']
})
export class TwoFactorAuthComponent implements OnInit {
  error = false;
  message = 'Log In';
  isLoading = false;
  twoFactorAuth: TwoFactorAuth;
  oneTimePassword: OneTimePassword;
  success = false;
  isSending = false;

  constructor(private userService: UserService, private jwt: JwtService, private router: Router) { }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.oneTimePassword = new OneTimePassword();
    this.oneTimePassword.crypto = '';
    this.oneTimePassword.otp = '';
  }
  ngOnInit() {
    this.resetForm();
    if (this.jwt.getToken()) {
      this.router.navigate(['/dashboard']);
    }
  }

  navigateSignIn() {
    this.router.navigate(['/signIn']);
  }

  navigateSignUp() {
    this.router.navigate(['/home']);
  }

  resendOTP() {
    this.isSending = true;
    this.userService.currentCrypto.subscribe( crypto => {
      console.log(crypto.username);
      this.userService.resendOtp(crypto.username).subscribe((data: any) => {
        this.isSending = false;
        this.success = true;
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        this.isSending = false;
        this.error = true;
      });
    });
  }

  OnSubmit( otp ) {
    this.message = 'Loading....';
    this.isLoading = true;
    this.error = false;
    this.oneTimePassword.otp = otp;
    this.userService.currentCrypto.subscribe( crypto => {
      this.oneTimePassword.crypto = crypto.crypto;
    });
    console.log(this.twoFactorAuth);
    this.userService.verifyOtp(this.oneTimePassword).subscribe((data: any) => {
      this.router.navigate(['/dashboard']);
    },
      (err: HttpErrorResponse) => {
        this.message = 'Log In';
        this.isLoading = false;
        this.error = true;
      });
  }

}
