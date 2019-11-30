import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePublicElectionComponent } from './create-public-election.component';
const routes: Routes = [
  {path: '', component: CreatePublicElectionComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePublicElectionRoutingModule { }
