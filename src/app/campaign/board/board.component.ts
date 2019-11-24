import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardService } from '../board.service';
import { Board, Tile} from '../board.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public boardId: string;
  public board: Observable<any>;
  public tasks: Tile[];

  constructor( private route: ActivatedRoute,
    private db: AngularFirestore,
    public boardService: BoardService, public userService: UserService) { }

  ngOnInit() {
    this.boardId = this.route.snapshot.paramMap.get('id');

    this.userService.subscribeToUsers();

    this.board = this.boardService.getBoard(this.boardId);


  }


}
