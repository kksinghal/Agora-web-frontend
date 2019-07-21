import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ElectionFormThreeRoutingModule } from './election-form-three-routing.module';
import { ElectionFormThreeComponent } from './election-form-three.component';
import { HeadingBarModule } from '../heading-bar/heading-bar.module';

@NgModule({
  declarations: [ElectionFormThreeComponent],
  imports: [
    CommonModule,
    ElectionFormThreeRoutingModule,
    FormsModule,
    HeadingBarModule
  ],
  exports: [ElectionFormThreeComponent]
})
export class ElectionFormThreeModule { }
