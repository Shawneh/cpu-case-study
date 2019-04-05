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
    price: string;
    purchaseDate: Date;
    warrantyExpiration: number;
}
