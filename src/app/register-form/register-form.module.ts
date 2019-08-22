import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form.component';
import { SocialLoginModule } from '../social-login/social-login.module';

@NgModule({
  declarations: [RegisterFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    SocialLoginModule
  ],
  exports: [RegisterFormComponent]
})
export class RegisterFormModule { }
