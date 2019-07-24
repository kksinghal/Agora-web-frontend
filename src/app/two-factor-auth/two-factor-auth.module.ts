import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TwoFactorAuthComponent } from './two-factor-auth.component';
import { TwoFactorAuthRoutingModule } from './two-factor-auth-routing.module';
import { LandingPageModule } from '../landing-page/landing-page.module';

@NgModule({
  declarations: [TwoFactorAuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    TwoFactorAuthRoutingModule,
    LandingPageModule
  ]
})
export class TwoFactorAuthModule { }
