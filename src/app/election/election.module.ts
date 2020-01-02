import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectionRoutingModule } from './election-routing.module';
import { HeadingBarModule } from '../heading-bar/heading-bar.module';
import { ElectionComponent } from './election.component';
import { NavbarModule } from '../navbar/navbar.module';
import { ElectionPagesCardModule } from '../election-pages-card/election-pages-card.module';
import { FooterModule } from '../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ElectionComponent],
  imports: [
    CommonModule,
    ElectionRoutingModule,
    HeadingBarModule,
    NavbarModule,
    ElectionPagesCardModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ElectionComponent]
})
export class ElectionModule { }
