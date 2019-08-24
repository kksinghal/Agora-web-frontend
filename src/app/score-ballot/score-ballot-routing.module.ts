import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoreBallotComponent } from './score-ballot.component';

const routes: Routes = [
  { path: '', component: ScoreBallotComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoreBallotRoutingModule { }
