import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectionComponent } from './election.component';

const routes: Routes = [
  { path: '', component: ElectionComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectionRoutingModule { }
