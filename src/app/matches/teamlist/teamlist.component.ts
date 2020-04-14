import { Component, OnInit, OnDestroy, Input  } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';
import { MatchService } from '../match.service';
import { User } from 'firebase';
import { Team } from '../match.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './teamlist.component.html',
  styleUrls: ['./teamlist.component.scss']
})
export class TeamlistComponent implements OnInit {

  @Input() players: User[];
  teams: Team[];
  LIST_IDS: string[] = [];

  constructor(public matchService: MatchService) {}

  ngOnInit() {

    this.teams = [
      {
        id: 'team-2',
        name: "Team 1",
        members: []
      }, 
      {
        id:'team-1',
        members: this.players,
        name: "League Members", 
      }, 
      {
        id: 'team-3',
        members: [],
        name: "Team 2", 
      }
    ]

    for (let team of this.teams) {
      this.LIST_IDS.push(team.id);
    };
    
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}