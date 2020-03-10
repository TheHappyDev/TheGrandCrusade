import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private snackBar: MatSnackBar, private afAuth: AngularFireAuth, private userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    let loggedInUser = this.afAuth.auth.currentUser;

    this.userService.getUser(loggedInUser.uid).subscribe(u => {this.form = this.fb.group({
      displayName: [u.displayName,[Validators.minLength(3), Validators.required]],
      color: [
        u.color,
        [Validators.minLength(6), Validators.required]
      ],
      sigil: [u.sigil, []]
    });
    this.user = u});

    
  }
  changeComplete(event){
    this.user.color = event.color.hex;
    this.form.controls['color'].setValue(event.color.hex);
  }
  async onSubmit() {
    this.loading = true;
    let userUpdate = this.form.value;

    try {
      this.userService.updateUser(this.user.id, userUpdate)
    } catch (err) {
      this.serverMessage = err;
    }

    this.snackBar.open('Save Sucessful', 'OK', {
      duration: 4000
    });
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
