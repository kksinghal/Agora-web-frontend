import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { AboutModule } from '../about/about.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    AboutModule,
    FooterModule
  ],
  exports: [LandingPageComponent]
})
export class LandingPageModule { }
