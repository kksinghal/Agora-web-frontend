import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SocialLoginModule } from '../social-login/social-login.module';
import { LoginFormComponent } from './login-form.component';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SocialLoginModule
  ],
  exports: [LoginFormComponent]
})
export class LoginFormModule { }
