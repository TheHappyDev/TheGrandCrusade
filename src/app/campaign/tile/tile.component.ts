import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../board.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() tile;

  constructor(private route: ActivatedRoute,
    private db: AngularFirestore,
    public boardService: BoardService, public userService: UserService) { }

  ngOnInit() {
    this.tile.occupoier = this.userService.getUser(this.tile.uid);
    
  }

}
