import { Component, OnInit, ViewChild } from '@angular/core';

import { ISoftwareMaster } from '../../../interfaces/master.type';

import { ComputerService } from '../../../services/tables/computer.service';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-installed-software',
  templateUrl: './installed-software.component.html',
  styleUrls: ['./installed-software.component.scss']
})
export class InstalledSoftwareComponent implements OnInit {
  @ViewChild('availableSort')availableSort: MatSort;
  @ViewChild('unavailableSort')unavailableSort: MatSort;

  softwareList: ISoftwareMaster[] = [];

  availableTableDisplay = ['name', 'publisher'];
  availableTableData =  new MatTableDataSource();
  availableTableSearchInput = '';

  unavailableTableDisplay = [];
  unavailableTableData = new MatTableDataSource();
  unavailableTableSearchInput = '';

  constructor(private compService: ComputerService) { }

  ngOnInit() {
  this.softwareList = this.compService.softwareMaster;

  for (const item of this.softwareList) {
    if (item.copiesMax === item.copiesUsed) {
      this.unavailableTableData.data.push(item);
    } else {
      this.availableTableData.data.push(item);
    }
  }
  }

  viewAssociatedComputers(index: number) {
    console.log(index);
  }

}
