export interface IProduct {
    productId: number,
    productName: string,
    productCode: string,
    releseDate: string,
    description: string,
    price: number,
    starRating:number,
    imgUrl:string,
    productShortCut: string ,
    categoryId: number,
    categoryName?: string
}