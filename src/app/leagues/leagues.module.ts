import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { LeaguelistComponent } from './leaguelist/leaguelist.component';
import { LeaguesRoutingModule } from './leagues-routing.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { LeagueTableComponent } from './league-table/league-table.component';



@NgModule({
  declarations: [LeaguelistComponent, LeagueTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    LeaguesRoutingModule,
    MatDialogModule,
    MatButtonToggleModule,
  ]
})
export class LeaguesModule { }
