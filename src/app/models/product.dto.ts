export class ProductDto {
    id: number;
    name: string;
    imageURL: string;
    image: string;
    category: string;
    diners: string;
    diameter: number;
    code: number;
    price: number;

    constructor (
        id: number,
        name: string,
        imageURL: string,
        image: string,
        category: string,
        diners: string,
        diameter: number,
        code: number,
        price: number
    ) {
        this.id = id;
        this.name = name;
        this.imageURL = imageURL;
        this.image = image;
        this.category = category;
        this.diners = diners;
        this.diameter = diameter;
        this.code = code;
        this.price = price;
    }
}