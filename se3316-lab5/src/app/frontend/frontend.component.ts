import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { ScheduleUpdater } from '../backend/backend.service'
import TimeTableData from '../TimeTableData.json';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>();
  courseInfo: any = TimeTableData;
  subject_entry = ''
  component_entry = ''
  super_entry = ""
  array_1 = [] as any[];
  courses: any = []
  isSignedIn = false;
  empty = "";


  constructor(public firebaseService: FirebaseService, private router: Router, public backendService: ScheduleUpdater) { }

  ngOnInit(): void {
    this.backendService.getsoftSearchUpdaterListener()
      .subscribe(data => {
        this.courses = data
      })
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
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(this.subject_entry)) {
      alert('ERROR: You have entered illegal characters.')
      location.reload()
    }
  }


  softSearch() {
    this.backendService.softSearch(this.super_entry)
    console.log('1')
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(this.super_entry)) {
      alert('ERROR: You have entered illegal characters.')
      location.reload()
    }
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
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(this.subject_entry) || (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(this.component_entry))) {
      alert('ERROR: You have entered illegal characters.')
      location.reload()
    }
  }

  schedulesSearch() {
    this.router.navigateByUrl('schedules')
  }

  logout() {
    this.firebaseService.logOut()
    this.isLogout.emit()
    this.router.navigateByUrl('')
  }

  handleLogout() {
    this.isSignedIn = false

  }


}
