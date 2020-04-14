import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  {
    path: 'user', 
    loadChildren: () => 
      import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'campaign',
    loadChildren: () =>
      import('./campaign/campaign.module').then(m => m.CampaignModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'leagues',
    loadChildren: () =>
      import('./leagues/leagues.module').then(m => m.LeaguesModule),
    canActivate: [AuthGuard]
  },
  {
    path: ':type/match',
    loadChildren: () =>
      import('./matches/matches.module').then(m => m.MatchesModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
