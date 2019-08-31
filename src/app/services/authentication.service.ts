import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { CommonService } from './common.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: Observable<firebase.User>;
  userInfo: firebase.User = null;
  constructor(
    private _firebaseAuth: AngularFireAuth,
    private commonService: CommonService
  ) {
  }

  getUserInfo = () => {
    return new Promise((resolve) => {
      this.user = this._firebaseAuth.authState;
      this.user.subscribe(
        (user) => {
          this.userInfo = user;
          resolve();
        }
      );
    });
  }

  async auth(email: string, password: string) {
    try {
      await this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
      await this.getUserInfo();
      return true;
    } catch (error) {
      this.commonService.showErrorMessage(error.message);
      return false;
    }
  }

  async register(email: string, password: string) {
    try {
      await this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
      await this.getUserInfo();
      return true;
    } catch (error) {
      this.commonService.showErrorMessage(error.message);
      return false;
    }
  }

  validateUser() {
    return new Promise((resolve) => {
      this._firebaseAuth.auth.onAuthStateChanged((user) => {
        if (user) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  async signOut() {
    await this._firebaseAuth.auth.signOut();
  }
}

