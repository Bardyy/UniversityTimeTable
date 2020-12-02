import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScheduleUpdater } from './backend.service';
import { Subscription } from 'rxjs';

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
  readonly ROOT_URL = 'http://localhost:3000'

  constructor(private http: HttpClient, public scheduleUpdater: ScheduleUpdater) { }

  ngOnInit(): void {
    this.scheduleUpdater.getSchedules()
    this.scheduleSubscriber = this.scheduleUpdater.getScheduleUpdaterListener()
      .subscribe(data => {
        this.get_schedules = data
      })
  }

}
