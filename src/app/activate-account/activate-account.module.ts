import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ActivateAccountRoutingModule } from './activate-account-routing.module';
import { ActivateAccountComponent } from './activate-account.component';
import { LandingPageModule } from '../landing-page/landing-page.module';

@NgModule({
  declarations: [ActivateAccountComponent],
  imports: [
    CommonModule,
    FormsModule,
    ActivateAccountRoutingModule,
    LandingPageModule
  ]
})
export class ActivateAccountModule { }
