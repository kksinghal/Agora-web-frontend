import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectionFormFourComponent } from './election-form-four.component';

const routes: Routes = [
  { path: '', component: ElectionFormFourComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectionFormFourRoutingModule { }
