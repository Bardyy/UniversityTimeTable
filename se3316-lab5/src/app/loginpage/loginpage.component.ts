import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  isSignedIn = false;

  constructor(public firebaseService: FirebaseService, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null)
      this.isSignedIn = true
    else
      this.isSignedIn = false
  }

  async onSignup(email: string, password: string) {
    await this.firebaseService.signUp(email, password)
    if (this.firebaseService.isLoggedIn)
      this.isSignedIn = true
    this.router.navigateByUrl('')
  }

  async onSignin(email: string, password: string) {
    await this.firebaseService.signIn(email, password)
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true
      this.router.navigateByUrl('/members')
    }

  }

  privacyPolicy() {
    window.open("http://localhost:4200/privacyPolicy", "_blank")
  }

}
