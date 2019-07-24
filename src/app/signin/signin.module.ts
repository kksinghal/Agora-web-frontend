import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { SigninComponent } from './signin.component';
import { LoginFormModule } from '../login-form/login-form.module';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    SigninRoutingModule,
    LandingPageModule,
    LoginFormModule,
  ]
})
export class SigninModule { }
