import { Injectable } from '@angular/core';
import { IComputerMaster, ISoftwareMaster, ITrainingSoftware } from '../../interfaces/master.type';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  computerTypes: string[] = [
    'Desktop', 'Laptop', 'Tablet'
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

  serviceRequests: string[] = [];

  computerMaster: IComputerMaster[] = [
    {
      computer_id: 10000,
      type: 'Desktop',
      serialNo: 'MB700367',
      model: 'R751D',
      brand: 'Asus',
      operatingSystem: 'Windows 10',
      chipArchitecture: '64-bit',
      processorSpeed: 3.1,
      ram: 16,
      storage: 2000,
      price: 999.99,
      purchaseDate: moment('04-07-2019', 'MM-DD-YYYY'),
      warrantyExpiration: null,
      installed: true,
      installedBy: 'Mike',
      building: 'Cook Hall',
      room: '213'
    },
    {
      computer_id: 10001,
      type: 'Laptop',
      serialNo: 'MB701367',
      model: 'R751L',
      brand: 'Asus',
      operatingSystem: 'Windows 10',
      chipArchitecture: '64-bit',
      processorSpeed: 2.8,
      ram: 8,
      storage: 512,
      price: 799.99,
      purchaseDate: moment('02-21-2019', 'MM-DD-YYYY'),
      warrantyExpiration: null,
      installed: true,
      installedBy: 'Gary',
      building: 'Davis-Shaugnessy',
      room: '425'
    },
    {
      computer_id: 10002,
      type: 'Desktop',
      serialNo: 'MB700492',
      model: 'R751D',
      brand: 'Asus',
      operatingSystem: 'Windows 10',
      chipArchitecture: '64-bit',
      processorSpeed: 3.1,
      ram: 16,
      storage: 2000,
      price: 999.99,
      purchaseDate: moment('04-07-2019', 'MM-DD-YYYY'),
      warrantyExpiration: null,
      installed: true,
      installedBy: 'Mike',
      building: 'Cook Hall',
      room: '234'
    },
    {
      computer_id: 10003,
      type: 'Laptop',
      serialNo: 'MB701831',
      model: 'R751L',
      brand: 'Asus',
      operatingSystem: 'Windows 10',
      chipArchitecture: '64-bit',
      processorSpeed: 2.8,
      ram: 8,
      storage: 512,
      price: 799.99,
      purchaseDate: moment('02-21-2019', 'MM-DD-YYYY'),
      warrantyExpiration: null,
      installed: true,
      installedBy: 'Mike',
      building: 'Cook Hall',
      room: '234'
    }

  ];

  softwareMaster: ISoftwareMaster[] = [
    {
      software_id: 10000,
      name: 'Word',
      category: 'Application',
      publisher: 'Microsoft',
      releaseYear: 2019,
      minProcessorSpeed: 1.6,
      minRam: 2,
      storageSize: 4.0,
      copiesUsed: 0,
      copiesMax: 5000,
      purchaseDate: moment('01-01-2019', 'MM-DD-YYYY'),
      licenseExpiration: moment('01-01-2020', 'MM-DD-YYYY'),
      available: true,
      unavailableReason: null
    },
    {
      software_id: 10001,
      name: 'Excel',
      category: 'Application',
      publisher: 'Microsoft',
      releaseYear: 2019,
      minProcessorSpeed: 1.8,
      minRam: 4,
      storageSize: 4.0,
      copiesUsed: 5000,
      copiesMax: 5000,
      purchaseDate: moment('08-27-2018', 'MM-DD-YYYY'),
      licenseExpiration: moment('08-27-2019', 'MM-DD-YYYY'),
      available: false,
      unavailableReason: 'Max Used'
    },
    {
      software_id: 10002,
      name: 'Powerpoint',
      category: 'Application',
      publisher: 'Microsoft',
      releaseYear: 2019,
      minProcessorSpeed: 1.8,
      minRam: 4,
      storageSize: 4.0,
      copiesUsed: 1000,
      copiesMax: 5000,
      purchaseDate: moment('08-27-2018', 'MM-DD-YYYY'),
      licenseExpiration: moment('08-27-2019', 'MM-DD-YYYY'),
      available: true,
      unavailableReason: 'Null'
    }
  ];

  trainingSoftware: ITrainingSoftware[] = [
    {
      software_id: 10000,
      softwareName: 'Word',
      softwareLogo: '../../../assets/images/software-logos/word.png',
      link: 'https://www.udemy.com/microsoft-word-from-beginner-to-advanced/',
      linkDescription: 'Microsoft Word from Beginner to Advanced',
      linkSource: 'Udemy'
    },
    {
      software_id: 10001,
      softwareName: 'Excel',
      softwareLogo: '../../../assets/images/software-logos/excel.png',
      link: 'https://www.udemy.com/microsoft-excel-2013-from-beginner-to-advanced-and-beyond/',
      linkDescription: 'Microsoft Excel from Beginner to Advanced',
      linkSource: 'Udemy'
    },
    {
      software_id: 10002,
      softwareName: 'Powerpoint',
      softwareLogo: '../../../assets/images/software-logos/powerpoint.png',
      link: 'https://www.udemy.com/powerpoint-master-class-for-business-and-finance-graduates/',
      linkDescription: 'Powerpoint Master Class',
      linkSource: 'Udemy'
    }
  ];

  constructor() { }
}
