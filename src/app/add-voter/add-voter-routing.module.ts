import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVoterComponent } from './add-voter.component';

const routes: Routes = [
  { path: '', component: AddVoterComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddVoterRoutingModule { }
