import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ElectionFormFourRoutingModule } from './election-form-four-routing.module';
import { ElectionFormFourComponent } from './election-form-four.component';
import { HeadingBarModule } from '../heading-bar/heading-bar.module';

@NgModule({
  declarations: [ElectionFormFourComponent],
  imports: [
    CommonModule,
    ElectionFormFourRoutingModule,
    FormsModule,
    HeadingBarModule
  ],
  exports: [ElectionFormFourComponent]
})
export class ElectionFormFourModule { }
