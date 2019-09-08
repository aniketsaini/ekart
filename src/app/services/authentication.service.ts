import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { CommonService } from './common.service';
import { Observable } from 'rxjs';
import { AngularFirestore, fromDocRef } from 'angularfire2/firestore';
import { promise } from 'protractor';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: Observable<firebase.User>;
  userInfo: firebase.User = null;
  constructor(
    private _firebaseAuth: AngularFireAuth,
    private commonService: CommonService,
    private db: AngularFirestore
  ) {
  }

  getUserInfo = () => {
    return new Promise((resolve) => {
      this.user = this._firebaseAuth.authState;
      this.user.subscribe(
        (user) => {
          this.userInfo = user;
          resolve(this.userInfo);
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


  getUserDetails = (userId) => {
    return new Promise((resolve) => {
      var docRef = this.db.collection("users");
      var query = docRef.ref.where("user_id", "==", userId);

      query.get().then(function (querySnapshot) {
        if (querySnapshot.empty) {
          resolve(false);
        }
        querySnapshot.forEach(function (doc) {
          let userInfo: any = {
            first_name: doc.data().first_name,
            last_name: doc.data().last_name,
            email: doc.data().email,
            phone: doc.data().phone,
            user_id: doc.data().user_id,
            id: doc.id
          }
          resolve(userInfo);
        });
      }).catch(function (error) {
        resolve(false);
      });
    });
  }

  updateUserDetails = (data, id) => {
    return new Promise((resolve) => {
      let docRef = this.db.collection("users").doc(id);
      docRef.set(data).then(() => {
        resolve(true);
      }).catch((err) => {
        resolve(false);
      });
    });
  }

  addUserDetails = (data) => {
    return new Promise((resolve) => {
      let docRef = this.db.collection("users");
      docRef.add(data).then(() => {
        resolve(true);
      }).catch((err) => {
        resolve(false);
      });
    });
  }

  async signOut() {
    await this._firebaseAuth.auth.signOut();
  }
}

