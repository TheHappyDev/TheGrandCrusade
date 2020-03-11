import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { League, Season } from './league.model';
import { UserService } from './../user/user.service';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private userService: UserService) { }

  get(leagueId: string) {
    return this.db.collection<League>('leagues').doc(leagueId).valueChanges();
  }
  getUserLeagues(): Observable<League[]> {
    let loggedInUser = this.afAuth.auth.currentUser;

    return this.db.collection<League>('leagues', ref => (ref.where("members", "array-contains", loggedInUser.uid))).valueChanges();

  }
  getPendingLeagues(): Observable<League[]> {
    let loggedInUser = this.afAuth.auth.currentUser;

    return this.db.collection<League>('leagues', ref => (ref.where("pendingInvites", "array-contains", loggedInUser.uid))).valueChanges();

  }
  update(leagueId: string, league: League) {
    this.db.collection<League>('leagues').doc(leagueId).update(league);
  }
  create(league: League) {
    this.db.collection<League>('leagues').add(league);
  }
  getSeasons(leagueId: string): Observable<Season[]> {
    return this.db.collection<League>('leagues').doc(leagueId)
      .collection<Season>('season').valueChanges().pipe(
        map(res => {
          if (res) {
            res.forEach(sea => {
              sea.table.forEach(tab => {
                this.userService.getUser(tab.userid).subscribe(user => tab.user = user);
              })
            })
          }
          return res;
        }));
  }

}
