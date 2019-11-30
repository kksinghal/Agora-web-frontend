import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankBallotComponent } from './rank-ballot.component';

const routes: Routes = [
  { path: '', component: RankBallotComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankBallotRoutingModule { }
