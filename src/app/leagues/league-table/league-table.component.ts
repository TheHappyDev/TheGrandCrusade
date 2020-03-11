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

  private id: string;
  public seasons: Season[];
  displayedColumns = ['commander', 'played', 'wins', 'losses'];
  constructor(private route: ActivatedRoute, private leagueService: LeagueService, private userService: UserService) { }


  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    
    this.leagueService.getSeasons(this.id).subscribe(seasons => {
      
      this.seasons = seasons;
       
      });
  
    


  }

}


