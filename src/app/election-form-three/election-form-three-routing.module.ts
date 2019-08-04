import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectionFormThreeComponent } from './election-form-three.component';

const routes: Routes = [
  { path: '', component: ElectionFormThreeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectionFormThreeRoutingModule { }
