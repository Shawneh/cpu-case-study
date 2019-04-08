import { Moment } from 'moment';

export interface IComputerMaster {
    computer_id: number;
    type: string;
    serialNo: string;
    model: string;
    brand: string;
    operatingSystem: string;
    chipArchitecture: string;
    processorSpeed: number;
    ram: number;
    storage: number;
    price: number;
    purchaseDate: Moment;
    warrantyExpiration: Moment;
    installed: boolean;
    installedBy: string;
    building: string;
    room: string;
}

export interface ISoftwareMaster {
    software_id: number;
    name: string;
    category: string;
    publisher: string;
    copiesUsed: string;
    copiesMax: number;
    licenseExpiration: Moment;
}
