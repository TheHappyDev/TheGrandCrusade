import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { League, Season } from './league.model';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { }

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
  getCurrentSeason(leagueId: string) {
    return this.db.collection<League>('leagues').doc(leagueId)
      .collection<Season>('season', ref => ref.orderBy("start", "desc")).valueChanges();
  }

}
