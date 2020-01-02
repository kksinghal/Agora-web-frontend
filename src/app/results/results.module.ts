import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';
import { HeadingBarModule } from '../heading-bar/heading-bar.module';
import { NavbarModule } from '../navbar/navbar.module';
import { ElectionPagesCardModule } from '../election-pages-card/election-pages-card.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    HeadingBarModule,
     NavbarModule,
     ElectionPagesCardModule,
     FooterModule
  ],
  exports: [ResultsComponent]
})
export class ResultsModule { }
