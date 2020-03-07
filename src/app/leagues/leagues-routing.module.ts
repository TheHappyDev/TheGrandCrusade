import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaguelistComponent } from './leaguelist/leaguelist.component';
import { LeagueTableComponent } from './league-table/league-table.component';


const routes: Routes = [
  { path: '', component: LeaguelistComponent },
  { path: ':id', component: LeagueTableComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaguesRoutingModule { }
