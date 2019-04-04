import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { IComputerType } from '../../../interfaces/master.type';

import { ComputerService } from '../../../services/tables/computer.service';

@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.scss']
})
export class AddComputerComponent implements OnInit {

  preliminaryForm: FormGroup;
  specificationForm: FormGroup;
  optionalForm: FormGroup;

  brandNames: string[];
  computerTypes: IComputerType[];
  chipTypes: string[];
  operatingSystems: string[];

  filteredBrands: Observable<string[]>;
  filteredOS: Observable<string[]>;

  selectedFormType: string;
  selectedChipArch: string;

  constructor(private formBuilder: FormBuilder, private compService: ComputerService) { }

  ngOnInit() {

    // Preliminary Form Setup
    this.computerTypes = this.compService.computerTypes;
    this.brandNames = this.compService.brands;
    this.chipTypes = this.compService.chipTypes;

    this.preliminaryForm = this.formBuilder.group({
      computerType: ['', [Validators.required]],
      serialNo: ['', Validators.required],
      model: ['', Validators.required],
      brand: ['', Validators.required]
    });

    // Setup Filtering for Brand Input
    this.filteredBrands = this.preliminaryForm.controls.brand.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterBrand(value))
      );

    // Specifications Form Setup
    this.operatingSystems = this.compService.operatingSystems;

    this.specificationForm = this.formBuilder.group({
      operatingSystem: ['', [Validators.required]],
      chipArchitecture: ['', [Validators.required]],
      processorSpeed: ['', Validators.required],
      ramAmount: ['', Validators.required],
      storageAmount: ['', Validators.required],
    });

    // Setup Filtering for Brand Input
    this.filteredOS = this.specificationForm.controls.operatingSystem.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterOS(value))
      );

    this.optionalForm = this.formBuilder.group({
      computerType: [''],
      serialNo: ['']
    });

  }

  private _filterBrand(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.brandNames.filter(name => name.toLowerCase().startsWith(filterValue));
  }

  private _filterOS(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.operatingSystems.filter(name => name.toLowerCase().startsWith(filterValue));
  }

}
