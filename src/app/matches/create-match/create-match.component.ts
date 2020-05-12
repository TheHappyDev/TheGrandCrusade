import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Round, GameType, Mission, Secondary, Deployments } from './../match.model'
import { UserService } from './../../user/user.service'
import { User } from './../../user/user.model';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent implements OnInit {

  public type: string;
  public players : User[];
  public possibleOpponents : string[];
  public rounds : Round[];
  private leagueId : string;
  panelOpenState;
  gameTypes: GameType[] = [
    {value: 'maelstrom', viewValue: 'Maelstrom'},
    {value: 'itc', viewValue: 'ITC'},
  ];
  missions: Mission[] = [
    {id: 1, type: 'itc', name:'Seize Ground', description: '<p>Deployment: Random, 6 objectives placed as shown.</p><p>Bonus Points: If a player holds of contests 4 or more objectives at the end of their player turn, gain 1 point.</p> ', imageUrl:'' },
    {id: 2, type: 'itc', name:'Cut to the Heart', description: '',imageUrl:'' },
    {id: 3, type: 'itc', name:'Nexus Control', description: '',imageUrl:''  },
    {id: 4, type: 'itc', name:"What's yours is mine", description: '',imageUrl:''  },
    {id: 5, type: 'itc', name:'Precious Cargo', description: '',imageUrl:''  },
    {id: 6, type: 'itc', name:'Crucible of Champions', description: '',imageUrl:''  },
  ];
  deployments: Deployments[] = [
    {id: 1, type: 'itc', name:'Spearhead assault', description:'', imageUrl:'', selected:false },
    {id: 2, type: 'itc', name:'Dawn of War', description: '',imageUrl:'', selected:false },
    {id: 3, type: 'itc', name:'Search and Destroy', description: '',imageUrl:'', selected:false  },
    {id: 4, type: 'itc', name:"Hammer and Anvil", description: '',imageUrl:'', selected:false  },
    {id: 5, type: 'itc', name:'Front-line Assault', description: '',imageUrl:'', selected:false  },
    {id: 6, type: 'itc', name:'Vanguard Strike', description: '',imageUrl:'', selected:false  },
  ];
  secondaries: Secondary[] = [
    {id: 1, type: 'old school', name:'Old School', description:'this is some placeholder text' },
    {id: 1, type: 'Seek and Destory', name:'Head Hunter', description:'this is some placeholder text' },
    {id: 1, type: 'Born for Greatness', name:'Old School', description:'this is some placeholder text' },
    {id: 1, type: 'Maneuver', name:'Recon', description:'this is some placeholder text' },
  ];

  id?: number;
  value: string;
  viewValue: string;
  description: string;
  selectedGameType: string;
  selectedMission: number;

  selectedDeployment:string;

  constructor(private route: ActivatedRoute, private afAuth: AngularFireAuth, private userService: UserService) { }

 

  ngOnInit() {
    this.route
      .data
      .subscribe(v => (this.type = v.type));

    this.leagueId = this.route.snapshot.paramMap.get('id');

    this.userService.getLeagueUsers(this.leagueId).subscribe(result => {
      this.players = result
    });
    
  }

  setGameType(type : string){

  }
  addPlayer(userid : string){

  }
  addRound(round : Round){

  }
  onSecondaryChange(event){

  }
  onDeploymentChange(deployment: string){
      this.selectedDeployment = deployment;
  }
  random(){
    this.deployments = this.deployments.map(x => {x.selected = false; return x});
    var randomItem = this.deployments[Math.floor(Math.random()*this.deployments.length)];
    randomItem.selected = true;
  }
}


