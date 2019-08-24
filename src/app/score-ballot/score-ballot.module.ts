import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreBallotRoutingModule } from './score-ballot-routing.module';
import { ScoreBallotComponent } from './score-ballot.component';
import { NavbarModule } from '../navbar/navbar.module';
import { HeadingBarModule } from '../heading-bar/heading-bar.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ScoreBallotComponent],
  imports: [
    CommonModule,
    ScoreBallotRoutingModule,
    FormsModule,
    NavbarModule,
    HeadingBarModule
  ],
  exports: [ScoreBallotComponent]
})
export class ScoreBallotModule { }
