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
    releaseYear: number;
    minProcessorSpeed: number;
    minRam: number;
    storageSize: number;
    copiesUsed: number;
    copiesMax: number;
    purchaseDate: Moment;
    licenseExpiration: Moment;
    available: boolean;
    unavailableReason: string;
}

export interface IComputerSoftware {
    software_id: number;
    computer_id: number[];
}

export interface IUser {
    username: string;
    password: string;
    role: string;
    coursesTaken: number[];
}

export interface ITrainingSoftware {
    software_id: number;
    softwareName: string;
    softwareLogo: string;
    link: string;
    linkDescription: string;
    linkSource: string;
}
