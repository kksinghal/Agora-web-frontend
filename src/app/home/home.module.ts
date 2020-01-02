import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarModule } from '../navbar/navbar.module';
import { HomeComponent } from './home.component';
import { RegisterFormModule } from '../register-form/register-form.module';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { AboutModule } from '../about/about.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarModule,
    LandingPageModule,
    RegisterFormModule,
    AboutModule,
    FooterModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
