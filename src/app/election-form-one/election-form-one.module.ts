import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingBarModule } from '../heading-bar/heading-bar.module';

import { ElectionFormOneRoutingModule } from './election-form-one-routing.module';
import { FormsModule } from '@angular/forms';
import { ElectionFormOneComponent } from './election-form-one.component';

@NgModule({
  declarations: [ElectionFormOneComponent],
  imports: [
    CommonModule,
    ElectionFormOneRoutingModule,
    HeadingBarModule,
    FormsModule,
  ],
  exports: [ElectionFormOneComponent]
})
export class ElectionFormOneModule { }
