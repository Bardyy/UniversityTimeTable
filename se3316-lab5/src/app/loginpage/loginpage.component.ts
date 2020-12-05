import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ScheduleUpdater } from '../backend/backend.service'
import TimeTableData from '../TimeTableData.json';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  isSignedIn = false;
  private scheduleSubscriber: Subscription;
  courseInfo: any = TimeTableData;
  subject_entry = ''
  component_entry = ''
  userName = ""
  super_entry = ""
  array_1 = [] as any[];
  courses: any = []
  get_schedules: any;


  constructor(public firebaseService: FirebaseService, private router: Router, public auth: AuthService, public backendService: ScheduleUpdater) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true
    }
    else { this.isSignedIn = false }
    this.backendService.getsoftSearchUpdaterListener()
      .subscribe(data => {
        this.courses = data
      })

    this.scheduleSubscriber = this.backendService.getScheduleUpdaterListener()
      .subscribe(data => {
        this.get_schedules = data
      })

  }

  getAllTheSchedules() {
    this.backendService.getAllSchedules()
  }

  async onSignup(email: string, password: string) {
    await this.firebaseService.signUp(email, password)
    if (this.firebaseService.isLoggedIn)
      this.isSignedIn = true
    this.router.navigateByUrl('')
    alert("Your account has been created " + this.userName)
    location.reload()
  }

  async onSignin(email: string, password: string) {
    await this.firebaseService.signIn(email, password)
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true
      this.router.navigateByUrl('/members')
    }

  }

  async onAdminSignIn(email: string, password: string) {
    await this.firebaseService.signAdminIn(email, password)
    if (this.firebaseService.isLoggedIn && this.firebaseService.uid == "oCyGVbwWRxdy0MomFlcznULQ9V93") {
      this.isSignedIn = true
      this.router.navigateByUrl('/members')
    }

  }

  subjectSearchSolo() {
    for (let i = 0; i < this.courseInfo.length; i++) {
      if ((this.courseInfo[i].subject === this.subject_entry.toUpperCase())) {

        this.array_1.push({
          "course_info": this.courseInfo[i].course_info
        });
        console.log(this.array_1)
      }

    }
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(this.subject_entry)) { alert('ERROR: You have entered illegal characters.') }
  }


  softSearch() {
    this.backendService.softSearch(this.super_entry)
    console.log('1')

  }



  subjectSearch() {
    for (let i = 0; i < this.courseInfo.length; i++) {
      if ((this.courseInfo[i].subject === this.subject_entry.toUpperCase() && this.courseInfo[i].catalog_nbr === this.component_entry.toUpperCase())) {

        this.array_1.push({
          "course_info": this.courseInfo[i].course_info
        });
        console.log(this.array_1)
      }

    }
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(this.subject_entry) || (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(this.component_entry))) { alert('ERROR: You have entered illegal characters.') }
  }



  privacyPolicy() {
    window.open("http://localhost:4200/privacyPolicy", "_blank")
  }

  aupPolicy() {
    window.open("http://localhost:4200/AUP", "_blank")
  }

}
