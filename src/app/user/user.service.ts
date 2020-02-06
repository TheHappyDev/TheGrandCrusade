import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { of, Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {}

  users :User[]; 
  subscription;

  subscribeToUsers() {
    if (!this.users) {
      this.subscription = this.db.collection<User>('users').valueChanges()
      .subscribe(users =>  {
        this.users = users;
      });
    }
  }

  getUser(userId: string):Observable<User>{
    if (this.users) {
      const cached = this.users.find(v => v.id === userId);
      return of(cached);
    } else {
      return this.db.collection<User>('users').doc(userId).valueChanges();
    }
  }

}
