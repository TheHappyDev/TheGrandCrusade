import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from '../../user/user.model'
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  form: FormGroup;
  public user: User;
  loading = false;
  public serverMessage: string;

  constructor(private afAuth: AngularFireAuth, private userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    let loggedInUser = this.afAuth.auth.currentUser;
    console.log(loggedInUser.uid);

    this.userService.getUser(loggedInUser.uid).subscribe(u => (this.user = u));

    this.form = this.fb.group({
      displayName: ['',[Validators.minLength(3), Validators.required]],
      color: [
        '',
        [Validators.minLength(6), Validators.required]
      ],
      sigil: ['', []]
    });
  }
  async onSubmit() {
    this.loading = true;
    let userUpdate = this.form.value;

    debugger;
    try {
      this.userService.updateUser(this.user.id, userUpdate)
    } catch (err) {
      this.serverMessage = err;
    }

    this.loading = false;
  }

  get displayName() {
    return this.form.get('displayName');
  }
  get color() {
    return this.form.get('color');
  }

  get sigil() {
    return this.form.get('sigil');
  }

}
