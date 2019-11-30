import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoteRoutingModule } from './vote-routing.module';
import { VoteComponent } from './vote.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [VoteComponent],
  imports: [
    CommonModule,
    VoteRoutingModule,
    NavbarModule
  ],
  exports: [VoteComponent]
})
export class VoteModule { }
