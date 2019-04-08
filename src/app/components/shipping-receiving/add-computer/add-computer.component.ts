import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { MatStepper } from '@angular/material/stepper';
import { MatSnackBar } from '@angular/material/snack-bar';

import { IComputerMaster } from '../../../interfaces/master.type';
import { ComputerService } from '../../../services/tables/computer.service';

@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.scss']
})
export class AddComputerComponent implements OnInit {
  @ViewChild('addComputerStepper')addComputerStepper: MatStepper;

  preliminaryForm: FormGroup;
  specificationForm: FormGroup;
  purchaseForm: FormGroup;

  brandNames: string[];
  computerTypes: string[];
  chipTypes: string[];
  operatingSystems: string[];

  filteredBrands: Observable<string[]>;
  filteredOS: Observable<string[]>;

  selectedFormType: string;
  selectedChipArch: string;

  constructor(private formBuilder: FormBuilder, private compService: ComputerService, private submittedSnackBar: MatSnackBar) { }

  ngOnInit() {

    // Preliminary Form Setup
    this.computerTypes = this.compService.computerTypes;
    this.brandNames = this.compService.brands;
    this.chipTypes = this.compService.chipTypes;
    this.operatingSystems = this.compService.operatingSystems;

    this.initForms();

    this.filteredBrands = this.preliminaryForm.controls.brand.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterBrand(value))
      );

    this.filteredOS = this.specificationForm.controls.operatingSystem.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterOS(value))
      );

  }

  private _filterBrand(value: string): string[] {

    if (value !== null) {
      const filterValue = value.toLowerCase();
      return this.brandNames.filter(name => name.toLowerCase().startsWith(filterValue));
    }
  }

  private _filterOS(value: string): string[] {

    if (value !== null) {
      const filterValue = value.toLowerCase();
      return this.operatingSystems.filter(name => name.toLowerCase().startsWith(filterValue));
    }
  }

  initForms() {
    this.preliminaryForm = this.formBuilder.group({
      computerType: ['', [Validators.required]],
      serialNo: ['', Validators.required],
      model: ['', Validators.required],
      brand: ['', Validators.required]
    });

    this.specificationForm = this.formBuilder.group({
      operatingSystem: ['', [Validators.required]],
      chipArchitecture: ['', [Validators.required]],
      processorSpeed: ['', [Validators.required, Validators.min(0)]],
      ramAmount: ['', [Validators.required, Validators.min(0)]],
      storageAmount: ['', [Validators.required, Validators.min(0)]],
    });

    this.purchaseForm = this.formBuilder.group({
      price: ['', [Validators.required, Validators.min(0)]],
      purchaseDate: ['', Validators.required],
      warrantyExpiration: ['']
    });
  }

  submitNewComputer() {
    if (this.preliminaryForm.invalid) {
      return;
    }
    if (this.specificationForm.invalid) {
      return;
    }
    if (this.purchaseForm.invalid) {
      return;
    }

    const newEntry: IComputerMaster = {
      computer_id: this.compService.computerMaster.length,
      type: this.preliminaryForm.get('computerType').value,
      serialNo: this.preliminaryForm.get('serialNo').value,
      model: this.preliminaryForm.get('model').value,
      brand: this.preliminaryForm.get('brand').value,
      operatingSystem: this.specificationForm.get('operatingSystem').value,
      chipArchitecture: this.specificationForm.get('chipArchitecture').value,
      processorSpeed: this.specificationForm.get('processorSpeed').value,
      ram: this.specificationForm.get('ramAmount').value,
      storage: this.specificationForm.get('storageAmount').value,
      price: this.purchaseForm.get('price').value,
      purchaseDate: this.purchaseForm.get('purchaseDate').value,
      warrantyExpiration: this.purchaseForm.get('warrantyExpiration').value,
      installed: false,
      installedBy: null,
      building: '',
      room: ''
    };

    this.compService.computerMaster.push(newEntry);

    this.preliminaryForm.reset();
    this.specificationForm.reset();
    this.purchaseForm.reset();
    this.addComputerStepper.selectedIndex = 0;

    console.log(this.compService.computerMaster);
  }

  showSubmittedSnackBar() {
    this.submittedSnackBar.open('Computer Added!', 'Okay!', {
      duration: 5000
    });
  }

}
