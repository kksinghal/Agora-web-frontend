import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ElectionPagesCardComponent } from './election-pages-card.component';

@NgModule({
  declarations: [ElectionPagesCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ElectionPagesCardComponent]
})
export class ElectionPagesCardModule { }
