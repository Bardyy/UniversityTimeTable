import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScheduleUpdater } from './backend.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {
  private scheduleSubscriber: Subscription;
  get_schedules: any;
  scheduleInput: string;
  validator = false;
  scheduleName: string
  scheduleList: any
  allComplete: boolean

  readonly ROOT_URL = 'http://localhost:3000'

  constructor(private http: HttpClient, public scheduleUpdater: ScheduleUpdater, private router: Router) { }

  ngOnInit(): void {
    //this.scheduleUpdater.getSchedules()
    this.scheduleSubscriber = this.scheduleUpdater.getScheduleUpdaterListener()
      .subscribe(data => {
        this.get_schedules = data
      })


  }

  getAllTheSchedules() {
    this.scheduleUpdater.getAllSchedules()
  }

  createSchedule() {
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(this.scheduleInput)) {
      this.validator = false;
      alert('ERROR: You have entered illegal characters.')
      location.reload()

    } else {
      this.validator = true;
      this.scheduleUpdater.createSchedule(this.scheduleInput)
      alert('You have created a schedule with the name: ' + this.scheduleInput)
      location.reload();
    }
  }

  deleteSchedules() {
    this.scheduleUpdater.deleteSchedule(this.ROOT_URL + '/api/courses/schedule')
    alert('All schedules have been deleted')
    location.reload();

  }

  updateSchedule() {

    this.scheduleUpdater.modifySchedule(this.scheduleName, this.scheduleList)
    this.scheduleSubscriber = this.scheduleUpdater.getScheduleUpdaterListener()
      .subscribe(data => {
        this.scheduleList = data
      })
    alert('The schedule has been updated')
    location.reload();
  }

  backToSearch() {
    this.router.navigateByUrl('members')
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
  }


}
