import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankBallotRoutingModule } from './rank-ballot-routing.module';
import { FormsModule } from '@angular/forms';
import { RankBallotComponent } from './rank-ballot.component';
import { NavbarModule } from '../navbar/navbar.module';
import { HeadingBarModule } from '../heading-bar/heading-bar.module';

@NgModule({
  declarations: [RankBallotComponent],
  imports: [
    CommonModule,
    RankBallotRoutingModule,
    FormsModule,
    NavbarModule,
    HeadingBarModule
  ]
})
export class RankBallotModule { }
