import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'form1', loadChildren: './election-form-one/election-form-one.module#ElectionFormOneModule', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'form2', loadChildren: './election-form-two/election-form-two.module#ElectionFormTwoModule', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'form3', loadChildren: './election-form-three/election-form-three.module#ElectionFormThreeModule', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'create-election', loadChildren: './create-private-election/create-private-election.module#CreatePrivateElectionModule', pathMatch: 'full' },
  { path: 'create-poll', loadChildren: './create-public-election/create-public-election.module#CreatePublicElectionModule', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' , pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule', pathMatch: 'full' },
  { path: 'reset-password', loadChildren: './reset-password/reset-password.module#ResetPasswordModule', pathMatch: 'full' },
  { path: 'activate/:token', component: ActivateAccountComponent, pathMatch: 'full' },
  { path: 'vote/:id/:pass', loadChildren: './vote/vote.module#VoteModule', pathMatch: 'full' },
  { path: 'two-factor-auth', loadChildren: './two-factor-auth/two-factor-auth.module#TwoFactorAuthModule', pathMatch: 'full' },
  { path: 'signIn', loadChildren: './signin/signin.module#SigninModule', pathMatch: 'full' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfileModule', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'change-password', loadChildren: './change-password/change-password.module#ChangePasswordModule', pathMatch: 'full',canActivate: [AuthGuard] },
  { path : 'election/:id', loadChildren: './election/election.module#ElectionModule', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'addVoter/:id', loadChildren: './add-voter/add-voter.module#AddVoterModule', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'edit/:id', loadChildren: './edit-election/edit-election.module#EditElectionModule', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'results/:id', loadChildren: './results/results.module#ResultsModule', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
