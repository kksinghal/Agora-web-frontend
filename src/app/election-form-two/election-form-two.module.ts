import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectionFormTwoComponent } from './election-form-two.component';
import { ElectionFormTwoRoutingModule } from './election-form-two-routing.module';
import { HeadingBarModule } from '../heading-bar/heading-bar.module';
import { FormsModule } from '@angular/forms';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [ElectionFormTwoComponent],
  imports: [
    CommonModule,
    ElectionFormTwoRoutingModule,
    HeadingBarModule,
    FormsModule,
    NavbarModule
  ],
  exports: [ElectionFormTwoComponent]
})
export class ElectionFormTwoModule { }
