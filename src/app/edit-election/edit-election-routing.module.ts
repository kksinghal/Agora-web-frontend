import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditElectionComponent } from './edit-election.component';

const routes: Routes = [
  { path: '', component: EditElectionComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditElectionRoutingModule { }
