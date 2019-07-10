import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwoFactorAuthComponent } from './two-factor-auth.component';

const routes: Routes = [
  {path: '', component: TwoFactorAuthComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwoFactorAuthRoutingModule { }
