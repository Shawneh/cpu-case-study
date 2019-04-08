import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ComputerService } from '../../../services/tables/computer.service';

import { IComputerMaster } from '../../../interfaces/master.type';

@Component({
  selector: 'app-installed-computers',
  templateUrl: './installed-computers.component.html',
  styleUrls: ['./installed-computers.component.scss'],
})
export class InstalledComputersComponent implements OnInit {
  @ViewChild('installedSort') installedSort: MatSort;
  @ViewChild('storageSort') storageSort: MatSort;

  computerList: IComputerMaster[] = [];

  allInstalledColumns = [
    'serialNo', 'model', 'operatingSystem',
    'chipArchitecture', 'processorSpeed', 'ram',
    'storage', 'price', 'purchaseDate',
    'warrantyExpiration'
  ];

  installedTableDisplay = ['building', 'room', 'brand', 'type', 'installedBy'];
  installedTableData = new MatTableDataSource();
  installedSearchInput = '';

  allStorageColumns = [
    'serialNo', 'model', 'operatingSystem',
    'chipArchitecture', 'processorSpeed', 'ram',
    'storage', 'price', 'purchaseDate',
    'warrantyExpiration'
  ];

  storageTableDisplay = ['brand', 'type'];
  storageTableData = new MatTableDataSource();
  storageSearchInput = '';

  constructor(private compService: ComputerService) { }

  ngOnInit() {
    this.computerList = this.compService.computerMaster;

    // Append the records to their appropriate tables
    for (const record of this.computerList) {
      if (record.installed) {
        this.installedTableData.data.push(record);
      } else {
        this.storageTableData.data.push(record);
      }
    }
    this.allInstalledColumns.sort();
    this.installedTableDisplay.sort();
    this.allStorageColumns.sort();
    this.storageTableDisplay.sort();

    this.installedTableData.sort = this.installedSort;

  }

  applyInstalledFilter(filterValue: string) {
    this.installedTableData.filter = filterValue.trim().toLowerCase();
  }
  applyStorageFilter(filterValue: string) {
    this.storageTableData.filter = filterValue.trim().toLowerCase();
  }

  clearInstalledSearch() {
    this.installedSearchInput = '';
    this.applyInstalledFilter('');
  }

  clearStorageSearch() {
    this.storageSearchInput = '';
    this.applyStorageFilter('');
  }

  addInstalledTableColumn(value: string) {
    this.installedTableDisplay.push(value);
    if (this.allInstalledColumns.indexOf(value) !== -1) {
      this.allInstalledColumns.splice(this.allInstalledColumns.indexOf(value), 1);
    }
    this.allInstalledColumns.sort();
    this.installedTableDisplay.sort();
  }

  removeInstalledTableColumn(value: string) {
    this.allInstalledColumns.push(value);
    if (this.installedTableDisplay.indexOf(value) !== -1) {
      this.installedTableDisplay.splice(this.installedTableDisplay.indexOf(value), 1);
    }
    this.allInstalledColumns.sort();
    this.installedTableDisplay.sort();
  }

  addStorageTableColumn(value: string) {
    this.storageTableDisplay.push(value);
    if (this.allStorageColumns.indexOf(value) !== -1) {
      this.allStorageColumns.splice(this.allStorageColumns.indexOf(value), 1);
    }
    this.allStorageColumns.sort();
    this.storageTableDisplay.sort();
  }

  removeStorageTableColumn(value: string) {
    this.allStorageColumns.push(value);
    if (this.storageTableDisplay.indexOf(value) !== -1) {
      this.storageTableDisplay.splice(this.storageTableDisplay.indexOf(value), 1);
    }
    this.allStorageColumns.sort();
    this.storageTableDisplay.sort();
  }
}
