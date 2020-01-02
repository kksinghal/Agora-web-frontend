import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from '../navbar/navbar.module';
import { SigninRoutingModule } from './signin-routing.module';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { SigninComponent } from './signin.component';
import { LoginFormModule } from '../login-form/login-form.module';
import { AboutModule } from '../about/about.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    SigninRoutingModule,
    NavbarModule,
    LandingPageModule,
    LoginFormModule,
    AboutModule,
    FooterModule
  ]
})
export class SigninModule { }
