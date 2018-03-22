import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class UserService implements CanActivate {
  userLoggedIn = false;
  loggedInUser: string;
  authUser: any;
  msg: string;

  constructor( private router: Router) {
  // Initialize Firebase

      const config = {
        apiKey: 'AIzaSyBNjlE6xNb6qIvS1ndA4Cztbk5Ag7DKl6o',
        authDomain: 'bristolfasterdrains.firebaseapp.com',
        databaseURL: 'https://bristolfasterdrains.firebaseio.com',
        projectId: 'bristolfasterdrains',
        storageBucket: 'bristolfasterdrains.appspot.com',
        messagingSenderId: '978102869678'
      };
      firebase.initializeApp(config);

      // apiKey: '***',
      // authDomain: '***.firebaseapp.com',
      // databaseURL: 'https://***.firebaseio.com',
      // projectId: '***',
      // storageBucket: '***.appspot.com',
      // messagingSenderId: '***'
    // };
    // firebase.initializeApp(config);

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.verifyLogin(url);
  }

  verifyLogin(url: string) {
    if ( this.userLoggedIn ) { return true; }

    this.router.navigate(['/admin/login']);
    return false;
  }

  register(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        this.msg = `<p>Something went wrong. Please try again.</p><p>${err.message}</p>`;
      });
  }

  verifyUser() {
    this.authUser = firebase.auth().currentUser;
    if ( this.authUser ) {
      this.loggedInUser = this.authUser.email;
      this.userLoggedIn = true;
      this.router.navigate(['/admin']);
    }
  }

  login(loginEmail: string, loginPassword: string) {
    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
      .catch((err) => {
        this.msg = `<p>Unable to login.</p><p>${err.message}</p><p>Please try again.</p>`;
      });
  }

  logout() {
    this.userLoggedIn = false;
    firebase.auth().signOut().then(() => {
      this.msg = `<p>Logged out</p>`;
    }, (err) => {
      this.msg = `<p>Unable to logout</p><p>${err.message}</p><p>Please try again</p>`;
    });
  }

}
