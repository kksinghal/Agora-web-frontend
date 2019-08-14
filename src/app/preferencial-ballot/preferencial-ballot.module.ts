import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferencialBallotRoutingModule } from './preferencial-ballot-routing.module';
import { PreferencialBallotComponent } from './preferencial-ballot.component';

@NgModule({
  declarations: [PreferencialBallotComponent],
  imports: [
    CommonModule,
    PreferencialBallotRoutingModule
  ],
  exports: [PreferencialBallotComponent]
})
export class PreferencialBallotModule { }
