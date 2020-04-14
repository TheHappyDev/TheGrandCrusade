import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeagueService } from './../league.service'
import { Season } from '../league.model';
import { UserService } from './../../user/user.service'

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class LeagueTableComponent implements OnInit {

  public leagueId: string;
  public seasons: Season[];
  displayedColumns = ['commander', 'played', 'wins', 'losses'];
  constructor(private route: ActivatedRoute, private leagueService: LeagueService, private userService: UserService) { }


  async ngOnInit() {
    this.leagueId = this.route.snapshot.paramMap.get('id');
    
    this.leagueService.getSeasons(this.leagueId).subscribe(seasons => {
      
      this.seasons = seasons;
       
      });
  
    


  }

}


