import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TwoFactorAuthComponent } from './two-factor-auth.component';
import { TwoFactorAuthRoutingModule } from './two-factor-auth-routing.module';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { AboutModule } from '../about/about.module';
import { FooterModule } from '../footer/footer.module';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [TwoFactorAuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    TwoFactorAuthRoutingModule,
    LandingPageModule,
    AboutModule,
    FooterModule,
    NavbarModule
  ]
})
export class TwoFactorAuthModule { }
