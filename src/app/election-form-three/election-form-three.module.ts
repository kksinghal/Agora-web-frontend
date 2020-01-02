import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ElectionFormThreeRoutingModule } from './election-form-three-routing.module';
import { ElectionFormThreeComponent } from './election-form-three.component';
import { HeadingBarModule } from '../heading-bar/heading-bar.module';
import { NavbarModule } from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [ElectionFormThreeComponent],
  imports: [
    CommonModule,
    ElectionFormThreeRoutingModule,
    FormsModule,
    HeadingBarModule,
    NavbarModule,
    FooterModule
  ],
  exports: [ElectionFormThreeComponent]
})
export class ElectionFormThreeModule { }
