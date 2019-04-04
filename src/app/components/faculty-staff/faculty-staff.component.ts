import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-faculty-staff',
  templateUrl: './faculty-staff.component.html',
  styleUrls: ['./faculty-staff.component.scss']
})
export class FacultyStaffComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor() { }

  ngOnInit() {
  }

}
