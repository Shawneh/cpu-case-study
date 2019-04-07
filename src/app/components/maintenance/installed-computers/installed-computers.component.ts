import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { ComputerService } from '../../../services/tables/computer.service';

import { IComputerMaster } from '../../../interfaces/master.type';

@Component({
  selector: 'app-installed-computers',
  templateUrl: './installed-computers.component.html',
  styleUrls: ['./installed-computers.component.scss']
})
export class InstalledComputersComponent implements OnInit {

  computerList: IComputerMaster[] = [];

  installedTableDisplay = ['building', 'room', 'brand', 'type'];
  installedTableData = new MatTableDataSource();

  storageTableDisplay = ['brand', 'type'];
  storageTableData = new MatTableDataSource();

  constructor(private compService: ComputerService) { }

  ngOnInit() {
    this.computerList = this.compService.computerMaster;

    // Append the records to their appropriate tables
    for (const record of this.computerList) {
      if (record.installed === true) {
        this.installedTableData.data.push(record);
      } else {
        this.storageTableData.data.push(record);
      }
    }

  }

  applyInstalledFilter(filterValue: string) {
    this.installedTableData.filter = filterValue.trim().toLowerCase();
  }
  applyStorageFilter(filterValue: string) {
    this.storageTableData.filter = filterValue.trim().toLowerCase();
  }

}
