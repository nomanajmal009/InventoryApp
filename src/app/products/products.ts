export interface Product{
    totalProducts: number;
    availableProducts: number;
    soldProducts: number;
}

export interface ProductList{
    productId?: string,
    price : number,
    type : string,
    brand : string,
    photo : string,
    availableDate : Date
}