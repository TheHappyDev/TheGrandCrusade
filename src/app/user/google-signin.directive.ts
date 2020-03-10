import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { User } from './user.model'
import { UserService } from './user.service'

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {
  constructor(private afAuth: AngularFireAuth, private userService: UserService){}

  @HostListener('click')
  onclick() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(result => {

      let userExists = this.userService.getUser(result.user.uid).toPromise().then(res => {return res != null});

      if(!userExists)
      {
        let user = {
          color: '#e2e2e2',
          displayName: 'user',
          sigil: '',
          uid: result.user.uid,
          id: result.user.uid,
        }
        this.userService.createUser(user)
      }
    });
    
  }
}