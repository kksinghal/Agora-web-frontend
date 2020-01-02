import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectionPagesCardComponent } from './election-pages-card.component';

const routes: Routes = [
  { path: '', component: ElectionPagesCardComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectionPagesCardRoutingModule { }
