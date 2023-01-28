import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, tap, throwError } from "rxjs";
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    public productUrl = 'api/products/products.json';
    // public productUrl = 'assets/json/products.json';

    constructor(private http: HttpClient) {
    }

    products$ = this.http.get<IProduct[]>(this.productUrl).pipe(
        map(products => products.map(product => (
            {
                ...product,
                price: product.price * 2,
                productShortCut: product.productName + product.productCode,
                
                // productId: product.productId,
                // productName: product.productName,
                // productCode: product.productCode,
                // releseDate: product.releseDate,
                // description: product.description,
                // price: product.price * 2,
                // starRating: product.starRating,
                // imgUrl: product.imgUrl
            }
        ) as IProduct)),
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
    );

    // getProducts(): Observable<IProduct[]> {
    //     return this.http.get<IProduct[]>(this.productUrl).pipe(
    //         tap(data => console.log(JSON.stringify(data))),
    //         catchError(this.handleError)
    //     );
    // }
    handleError(err: HttpErrorResponse) {
        let message: string;
        if (err.error instanceof ErrorEvent)
            message = `ClientSide Error happend: ${err.error.message}`;
        else
            message = `Server Error: Status: ${err.status} ${err.message}`;
        console.log(message);

        return throwError(() => message);
    }
}