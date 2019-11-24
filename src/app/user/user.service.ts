import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {}

  users = null;

  getUser(userId: string) {
    if (this.users) {
      const cached = this.users.find(v => v.id === userId);
      return of(cached);
    } else {
      return this.db.collection('users').doc(userId).valueChanges();
    }
  }

}
