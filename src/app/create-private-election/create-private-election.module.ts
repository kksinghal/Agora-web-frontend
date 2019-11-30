import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePrivateElectionRoutingModule } from './create-private-election-routing.module';
import { CreatePrivateElectionComponent } from './create-private-election.component';

@NgModule({
  declarations: [CreatePrivateElectionComponent],
  imports: [
    CommonModule,
    CreatePrivateElectionRoutingModule
  ],
  exports: [CreatePrivateElectionComponent]
})
export class CreatePrivateElectionModule { }
