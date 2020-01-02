import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarModule } from '../navbar/navbar.module';
import { DashboardComponent } from './dashboard.component';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    NavbarModule,
    FooterModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
