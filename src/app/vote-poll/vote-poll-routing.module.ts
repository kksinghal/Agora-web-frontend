import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotePollComponent } from './vote-poll.component';

const routes: Routes = [
  { path: '', component: VotePollComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotePollRoutingModule { }
