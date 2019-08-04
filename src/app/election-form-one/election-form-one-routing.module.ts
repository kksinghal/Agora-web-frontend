import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectionFormOneComponent } from './election-form-one.component';
const routes: Routes = [
  { path: '', component: ElectionFormOneComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectionFormOneRoutingModule { }
