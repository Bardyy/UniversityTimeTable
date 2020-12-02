import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({ providedIn: "root" })
export class ScheduleUpdater {
    private schedules: any = [];

    private schedulesSubject = new Subject();
    readonly ROOT_URL = 'http://localhost:3000'

    constructor(private http: HttpClient) { }

    getScheduleUpdaterListener() {
        return this.schedulesSubject.asObservable();
    }


    getSchedules() {
        this.http
            .get(this.ROOT_URL + '/api/courses/schedule/list/amount')
            .subscribe(schedules => {
                console.log(schedules)
                this.schedules = schedules;
                this.schedulesSubject.next([...this.schedules]);
            });
    }


    createSchedule(name) {
        this.http
            .post(this.ROOT_URL + '/api/courses/schedule', ({ scheduleName: name }))
            .subscribe(schedules => {
                console.log(schedules)

            });
    }


    deleteSchedule(name) {

        this.http
            .delete(this.ROOT_URL + '/api/courses/schedule')
            .subscribe(schedules => {
                alert('All schedules have been deleted')

            });

    }

    modifySchedule(name, scheduleList) {

        this.http
            .put(this.ROOT_URL + `/api/courses/schedule/${name}`, { scheduleList: scheduleList })
            .subscribe(schedules => {


            });

    }



}