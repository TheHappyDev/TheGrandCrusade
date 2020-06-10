import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMatchComponent } from './create-match/create-match.component';
import { SharedModule } from '../shared/shared.module';
import { MatchRoutingModule } from './match-routing.module';
import { TeamlistComponent } from './teamlist/teamlist.component';
import { MissionComponent } from './mission/mission.component';
import { DeploymentComponent } from './deployment/deployment.component';

@NgModule({
  declarations: [CreateMatchComponent, TeamlistComponent, MissionComponent, DeploymentComponent],
  imports: [
    CommonModule, 
    SharedModule,
    MatchRoutingModule
  ]
})
export class MatchesModule { }
