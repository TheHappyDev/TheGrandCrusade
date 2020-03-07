import { Component, OnInit } from '@angular/core';
import { League } from './../league.model' 
import { LeagueService } from './../league.service'

@Component({
  selector: 'app-leaguelist',
  templateUrl: './leaguelist.component.html',
  styleUrls: ['./leaguelist.component.scss']
})
export class LeaguelistComponent implements OnInit {

  constructor(private leagueService: LeagueService) { }

  public userLeagues : League[]
  public publicLeagues : League[]
  public privateLeagues : League[]
  public pendingLeagues : League[]


  ngOnInit() {
    this.leagueService.getUserLeagues().subscribe( leagues => (this.userLeagues = leagues));
    this.leagueService.getPendingLeagues().subscribe( leagues => (this.pendingLeagues = leagues));
  }

}
