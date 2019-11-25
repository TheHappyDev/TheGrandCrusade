import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { switchMap, map } from 'rxjs/operators';
import { Board, Tile} from './board.model';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {}

  /**
   * Creates a new board for the current user
   */
  async createBoard(data: Board) {
    const user = await this.afAuth.auth.currentUser;
    return this.db.collection('boards').add({
      ...data,
      uid: user.uid,
      createdOn: firebase.firestore.FieldValue.serverTimestamp(),
      tiles: []
    });
  }


  getBoard(boardId: string) {
    return this.db
      .collection<Board>('boards')
      .doc(boardId)
      .valueChanges();
  }
  /**
   * Delete board
   */
  deleteBoard(boardId: string) {
    return this.db
      .collection('boards')
      .doc(boardId)
      .delete();
  }

  /**
   * Updates the tasks on board
   */
  updateTiles(boardId: string, tiles: Tile[]) {
    return this.db
      .collection('boards')
      .doc(boardId)
      .update({ tiles });
  }

  /**
   * Get all boards owned by current user
   */
  getUserBoards() {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db
            .collection<Board>('boards')
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }
}
