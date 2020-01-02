import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';
import { PasswordData } from '../model/password.model';
import { AgoraSocialUserService } from '../services/agora-social-user.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  user: User;
  newPassword: PasswordData = new PasswordData();
  newRetypePassword: PasswordData = new PasswordData();
  twoFacorAuthentication: boolean;
  twoFactorAuth: string;
  resetPassword: boolean;
  isActivationError = false;
  error = false;
  success = false;
  isLoading = false;
  message = 'Reset Password';
  token: string;
  constructor(private userService: UserService, private agoraSocialUserService: AgoraSocialUserService, private router: Router, private route: ActivatedRoute) {
    this.user = this.userService.getCurrentUser();
    this.twoFacorAuthentication = this.user.twoFactorAuthentication;
    this.resetPassword = false;
    this.updateMessage();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.token = params.token;
    });
  }

  resetPasswordToggle() {
    this.resetPassword = !this.resetPassword;
  }
  isPasswordResetEnabled() {
    return this.resetPassword
  }

  updateMessage() {
    if  (this.twoFacorAuthentication) {
      this.twoFactorAuth = 'Enabled';
    } else {
      this.twoFactorAuth = 'Disabled';
    }
  }

  isSocialUser() {
    if (this.agoraSocialUserService.getIsSocialUser() === 'true') {
      return true;
    } else {
      return false;
    }
  }

  updateProfile() {
    this.userService.updateUser(this.user).subscribe((data: any) => {
      this.showNotification('success', 'Your profile was successfully updated');
    },
      (err: HttpErrorResponse) => {
        if (err.status === 200) {
          this.showNotification('success', 'Your profile was successfully updated');
        } else {
          this.showNotification('danger', 'Unable to update profile. Please try again');
        }
      });
  }

  toggleTwoFactorAuthentication() {
    this.userService.toggleTwoFactorAuthentication().subscribe((data: any) => {
      this.twoFacorAuthentication = !this.twoFacorAuthentication;
      this.updateMessage();
      console.log(this.twoFacorAuthentication);
      this.showNotification('success', 'Two Factor Authentication was successfully updated');
    },
      (err: HttpErrorResponse) => {
        if (err.status === 200) {
          this.showNotification('success', 'Two Factor Authentication was successfully updated');
        } else {
          this.updateMessage();
          console.log(this.twoFacorAuthentication);
          this.showNotification('danger', 'Unable to update. Please try again');
        }
      });
  }

  navigatePassword() {
    this.router.navigate(['/change-password']);
  }

  showNotification(notifType: string, message: string) {
    $.notify({
      icon: notifType === 'success' ? 'done' : 'notifications',
      message: message

    }, {
        type: notifType,
        timer: 4000,
        placement: {
          from: 'top',
          align: 'right'
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
  }
  navigateSignIn() {
    this.router.navigate(['/signIn']);
  }

  navigateSignUp() {
    this.router.navigate(['/home']);
  }
  OnSubmit(password) {
    this.message = 'Loading....';
    this.isLoading = true;
    this.error = false;
    this.success = false;
    const passwordData = new PasswordData();
    passwordData.password = password;
    this.userService.resetPassword(passwordData, this.token).subscribe((data: any) => {
      this.message = 'Reset Password';
      this.isLoading = false;
      this.success = true;
    },
      (err: HttpErrorResponse) => {
        if (err.status === 200) {
          this.message = 'Reset Password';
          this.isLoading = false;
          this.success = true;
        } else {
          this.message = 'Reset Password';
          this.isLoading = false;
          this.error = true;
        }
      });
  }

}
