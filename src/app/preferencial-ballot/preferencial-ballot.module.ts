import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferencialBallotRoutingModule } from './preferencial-ballot-routing.module';
import { PreferencialBallotComponent } from './preferencial-ballot.component';
import { HeadingBarModule } from '../heading-bar/heading-bar.module';
import { NavbarModule } from '../navbar/navbar.module';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [PreferencialBallotComponent],
  imports: [
    CommonModule,
    PreferencialBallotRoutingModule,
    HeadingBarModule,
    NavbarModule,
    DragulaModule.forRoot(),
  ],
  exports: [PreferencialBallotComponent]
})
export class PreferencialBallotModule { }
