import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePrivateElectionComponent } from './create-private-election.component';
const routes: Routes = [
  { path: '', component: CreatePrivateElectionComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePrivateElectionRoutingModule { }
