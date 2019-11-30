import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { User } from '../model/user.model';
import { PasswordData } from '../model/password.model';
import { AgoraSocialUserService } from '../services/agora-social-user.service';

import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.sass']
})
export class ChangePasswordComponent implements OnInit {

  newPassword: PasswordData = new PasswordData();
  newRetypePassword: PasswordData = new PasswordData();

  constructor(private router: Router, private userService: UserService, private agoraSocialUserService: AgoraSocialUserService) {

  }

  ngOnInit() {
  }

  isSocialUser() {
    if (this.agoraSocialUserService.getIsSocialUser() === 'true') {
      return true;
    } else {
      return false;
    }
  }

  changePassword() {
    if (this.newPassword.password === this.newRetypePassword.password) {
      this.userService.changePassword(this.newPassword).subscribe((data: any) => {
        this.router.navigate(['/profile']);
        this.showNotification('success', 'Your password was successfully updated');
      },
        (err: HttpErrorResponse) => {
          if (err.status === 200) {
            this.showNotification('success', 'Your password was successfully updated');
          } else {
            this.showNotification('danger', 'Unable to update password. Please try again');
          }
        });
    } else {
      this.showNotification('danger', 'Passwords do not match');
    }
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

}
