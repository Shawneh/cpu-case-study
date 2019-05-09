import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ComputerService } from 'src/app/services/tables/computer.service';
import { ITrainingSoftware } from 'src/app/interfaces/master.type';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  constructor(private authService: AuthService, private compService: ComputerService) { }

  user: string;
  completedPerc: number;
  uncompletedPerc: number;

  totalCourses: number;
  coursesTaken: ITrainingSoftware[] = [];
  coursesNotTaken: ITrainingSoftware[] = [];

  ngOnInit() {

    this.user = this.authService.sessionUser;
    this.totalCourses = this.compService.trainingSoftware.length;

    for (const user of this.authService.userList) {
      if (user.username === this.authService.sessionUser) {
        for (const course of user.coursesTaken) {
          for (const training of this.compService.trainingSoftware) {
            if (training.software_id === course) {
              this.coursesTaken.push(training);
            }
          }
        }
      }
    }
    for (const course of this.compService.trainingSoftware) {
      if (this.coursesTaken.indexOf(course) === -1) {
        this.coursesNotTaken.push(course);
      }
    }

    this.completedPerc = 100 * (this.coursesTaken.length / this.totalCourses);
    this.uncompletedPerc = 100 - this.completedPerc;

  }

}
