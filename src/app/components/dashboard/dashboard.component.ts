import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  gridColumns: number;
  constructor() { }

  ngOnInit() {
    this.gridColumns = (window.innerWidth <= 480) ? 1 : 5;
  }

  onResize(event) {
    this.gridColumns = (event.target.innerWidth <= 480) ? 1 : 5;
  }

}
