import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule', pathMatch: 'full' },
  { path: 'reset-password', loadChildren: './reset-password/reset-password.module#ResetPasswordModule', pathMatch: 'full' },
  { path: 'activate/:token', component: ActivateAccountComponent, pathMatch: 'full' },
  { path: 'two-factor-auth', loadChildren: './two-factor-auth/two-factor-auth.module#TwoFactorAuthModule', pathMatch: 'full' },
  {path: 'signIn', loadChildren: './signin/signin.module#SigninModule', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
