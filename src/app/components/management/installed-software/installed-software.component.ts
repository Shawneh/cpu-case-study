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

  allAvailableColumns = [
    'category', 'releaseYear', 'minProcessorSpeed',
    'minRam', 'storageSize', 'copiesUsed',
    'copiesMax', 'purchaseDate', 'licenseExpiration'
  ];
  availableTableDisplay = ['name', 'publisher', 'copiesUsed',
  'copiesMax' ];
  availableTableData =  new MatTableDataSource();
  availableSearchInput = '';

  allUnavailableColumns = [
    'category', 'releaseYear', 'minProcessorSpeed',
    'minRam', 'storageSize', 'purchaseDate', 'licenseExpiration'
  ];
  unavailableTableDisplay = ['unavailableReason', 'name', 'copiesUsed',
  'copiesMax' ];
  unavailableTableData = new MatTableDataSource();
  unavailableSearchInput = '';

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
    // Show computers associated with a certain software
    // Would use the IComputerSoftware Interface
    console.log(index);
  }

  applyAvailableFilter(filterValue: string) {
    this.availableTableData.filter = filterValue.trim().toLowerCase();
  }

  applyUnavailableFilter(filterValue: string) {
    this.availableTableData.filter = filterValue.trim().toLowerCase();
  }

  clearInputFilter(filterName: string) {
    if (filterName === 'available') {
      this.availableSearchInput = '';
      this.applyAvailableFilter('');
    } else if (filterName === 'unavailable') {
      this.unavailableSearchInput = '';
      this.applyUnavailableFilter('');
    } else {
      console.log('Unknown Search');
    }
  }

  addAvailableTableColumn(value: string) {
    this.availableTableDisplay.push(value);
    if (this.allAvailableColumns.indexOf(value) !== -1) {
      this.allAvailableColumns.splice(this.allAvailableColumns.indexOf(value), 1);
    }
    this.allAvailableColumns.sort();
    this.availableTableDisplay.sort();
  }

  removeAvailableTableColumn(value: string) {
    this.allAvailableColumns.push(value);
    if (this.availableTableDisplay.indexOf(value) !== -1) {
      this.availableTableDisplay.splice(this.availableTableDisplay.indexOf(value), 1);
    }
  }

  addUnavailableTableColumn(value: string) {
    this.unavailableTableDisplay.push(value);
    if (this.allUnavailableColumns.indexOf(value) !== -1) {
      this.allUnavailableColumns.splice(this.allUnavailableColumns.indexOf(value), 1);
    }
    this.allUnavailableColumns.sort();
    this.unavailableTableDisplay.sort();
  }

  removeUnavailableTableColumn(value: string) {
    this.allUnavailableColumns.push(value);
    if (this.unavailableTableDisplay.indexOf(value) !== -1) {
      this.unavailableTableDisplay.splice(this.unavailableTableDisplay.indexOf(value), 1);
    }
    this.allUnavailableColumns.sort();
    this.unavailableTableDisplay.sort();
  }

}
