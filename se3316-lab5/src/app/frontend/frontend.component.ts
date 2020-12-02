import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
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
  array_1 = [] as any[];
  isSignedIn = false;


  constructor(public firebaseService: FirebaseService, private router: Router) { }

  ngOnInit(): void {
  }

  subjectSearch() {
    for (let i = 0; i < this.courseInfo.length; i++) {
      if ((this.courseInfo[i].subject === this.subject_entry && this.courseInfo[i].catalog_nbr === this.component_entry)) {

        this.array_1.push({
          "course_info": this.courseInfo[i].course_info
        });
        console.log(this.array_1)
      }


    }
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(this.subject_entry) || (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(this.component_entry))) { alert('ERROR: You have entered illegal characters.') }
  }
}
