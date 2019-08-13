import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { HeadingBarModule } from '../heading-bar/heading-bar.module';
import { ChangePasswordComponent } from './change-password.component';

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChangePasswordRoutingModule,
    HeadingBarModule
  ],
  exports: [ChangePasswordComponent]
})
export class ChangePasswordModule { }
