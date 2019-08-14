import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddVoterRoutingModule } from './add-voter-routing.module';
import { AddVoterComponent } from './add-voter.component';
import { HeadingBarModule } from '../heading-bar/heading-bar.module';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [AddVoterComponent],
  imports: [
    CommonModule,
    FormsModule,
    AddVoterRoutingModule,
    HeadingBarModule,
    NavbarModule
  ],
  exports: [AddVoterComponent]
})
export class AddVoterModule { }
