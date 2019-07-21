import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePublicElectionRoutingModule } from './create-public-election-routing.module';
import { CreatePublicElectionComponent } from './create-public-election.component';

@NgModule({
  declarations: [CreatePublicElectionComponent],
  imports: [
    CommonModule,
    CreatePublicElectionRoutingModule
  ],
  exports: [CreatePublicElectionComponent]
})
export class CreatePublicElectionModule { }
