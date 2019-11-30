import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotePollRoutingModule } from './vote-poll-routing.module';
import { NavbarModule } from '../navbar/navbar.module';
import { VotePollComponent } from './vote-poll.component';

@NgModule({
  declarations: [VotePollComponent],
  imports: [
    CommonModule,
    VotePollRoutingModule,
    NavbarModule
  ]
})
export class VotePollModule { }
