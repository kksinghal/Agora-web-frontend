import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreferencialBallotComponent } from './preferencial-ballot.component';

const routes: Routes = [
  { path: '', component: PreferencialBallotComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferencialBallotRoutingModule { }
