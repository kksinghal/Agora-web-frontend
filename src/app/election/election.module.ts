import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectionRoutingModule } from './election-routing.module';
import { HeadingBarModule } from '../heading-bar/heading-bar.module';
import { ElectionComponent } from './election.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [ElectionComponent],
  imports: [
    CommonModule,
    ElectionRoutingModule,
    HeadingBarModule,
    NavbarModule
  ],
  exports: [ElectionComponent]
})
export class ElectionModule { }
