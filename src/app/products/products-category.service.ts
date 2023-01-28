import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, tap, throwError } from "rxjs";
import { IProductCategory } from "./product-category";

@Injectable({
    providedIn: 'root'
})

export class ProductCategoryService {

    public productCategoriesUrl = 'api/products/category.json';
    // public productCategoriesUrl = 'assets/json/category.json';

    constructor(private http: HttpClient) {
    }

    categories$ = this.http.get<IProductCategory[]>(this.productCategoriesUrl).pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
    );

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