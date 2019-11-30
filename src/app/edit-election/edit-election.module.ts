import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditElectionRoutingModule } from './edit-election-routing.module';
import { EditElectionComponent } from './edit-election.component';

@NgModule({
  declarations: [EditElectionComponent],
  imports: [
    CommonModule,
    EditElectionRoutingModule
  ],
  exports: [EditElectionComponent]
})
export class EditElectionModule { }
