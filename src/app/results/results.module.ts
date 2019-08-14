import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';
import { HeadingBarModule } from '../heading-bar/heading-bar.module';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    HeadingBarModule,
     NavbarModule
  ],
  exports: [ResultsComponent]
})
export class ResultsModule { }
