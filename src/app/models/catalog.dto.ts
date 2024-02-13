export class CatalogDto{
    id: number;
    month: number;
    year: number;

    constructor(
        id: number,
        month: number,
        year: number
    ) {
        this.id = id;
        this.month = month;
        this.year = year
    }
}