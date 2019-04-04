export interface IComputerType {
    id: number;
    type: string;
}

export interface IComputerMaster {
    id: number;
    type: string;
    serialNo: string;
    model: string;
    brand: string;
    operatingSystem: string;
    chipArchitecture: number;
    processorSpeed: number;
    ram: number;
    storage: number;
    warrantyLength: number;
    purchaseDate: Date;
}
