export class Product {
    id_prod?: number;
    type?: string;
    brand?: string;
    subBrand?: string;
    price?: number;
    description?: string;
    operating_system?: string;
    processor?: string;
    graphics?: string;
    memory?: string;
    hardDrive?: string;
    wireless?: string;
    powerSupply?: string;
    battery?: string;
    screen?: number;
    quantity?: number;

    constructor(
        id_prod: number = 0,
        type: string = '',
        brand: string = '',
        subBrand: string = '',
        price: number = 0,
        description: string = '',
        operating_system: string = '',
        processor: string = '',
        graphics: string = '',
        memory: string = '',
        hardDrive: string = '',
        wireless: string = '',
        powerSupply: string = '',
        battery: string = '',
        screen: number = 0,
        quantity: number = 0,
    ){
        this.id_prod = id_prod
        this.type = type
        this.brand = brand
        this.subBrand = subBrand
        this.price = price
        this.description = description
        this.operating_system = operating_system
        this.processor = processor
        this.graphics = graphics
        this.memory = memory
        this.hardDrive = hardDrive
        this.wireless = wireless
        this.powerSupply = powerSupply
        this.battery = battery
        this.screen = screen
        this.quantity = quantity
    }
}
