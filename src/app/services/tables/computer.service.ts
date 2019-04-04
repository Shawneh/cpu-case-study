import { Injectable } from '@angular/core';
import { IComputerType } from '../../interfaces/master.type';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  computerTypes: IComputerType[] = [
    {id: 100, type: 'Desktop'},
    {id: 101, type: 'Laptop'},
    {id: 102, type: 'Tablet'}
  ];

  brands: string[] = [
    'Acer', 'Apple', 'Asus', 'Dell',
    'Hewlett-Packard', 'Lenovo', 'Microsoft'
  ];

  chipTypes: string[] = [
    '32-bit', '64-bit'
  ];

  operatingSystems: string[] = [
    'Linux', 'Linux Mint', 'macOS Mojave', 'macOS High Sierra',
    'macOS Sierra', 'OS X El Capitan', 'OS X Mavericks',
    'Solus', 'Ubuntu', 'Unix',
    'Windows 10 S', 'Windows 10', 'Windows 8/8.1', 'Windows 7'
  ];

  constructor() { }
}
