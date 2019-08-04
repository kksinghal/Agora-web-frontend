import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectionFormTwoComponent } from './election-form-two.component';

const routes: Routes = [
  { path: '', component: ElectionFormTwoComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectionFormTwoRoutingModule { }
