import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfileRoutingModule } from './profile-routing.module';
import { HeadingBarModule } from '../heading-bar/heading-bar.module';
import { ProfileComponent } from './profile.component';
import { NavbarModule } from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    HeadingBarModule,
    NavbarModule,
    FooterModule
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }
