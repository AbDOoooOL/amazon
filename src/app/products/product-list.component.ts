import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service';
import { Observable, Subscription, catchError, combineLatestWith, map, of } from 'rxjs';
import { ProductCategoryService } from './products-category.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'amzn-products',
  templateUrl: './product-list.component.html',
  // styles: ['thead{color:pink}'],
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ProductListComponant implements OnInit {

  pageTitle: string = "Product List";

  imageW: number = 100;

  imageMar: number = 15;

  myPhoto: string = "my photo";

  myImage: string = "assets/images/aleppo.jpg";

  displayImage: boolean = false;

  displayCode!: boolean;

  // products$: Observable<IProduct[]> | undefined;

  // filteredProducts: IProduct[] = [];

  sub!: Subscription;
  errorMessage: any;

  constructor(
    private productService: ProductService,
    private categoriesServies: ProductCategoryService,
    private store: Store<any>
  ) {
    //console.log("constroctor...");
  }

  ngOnInit(): void {
    this.store.select('products').subscribe(
      products => {
        if (products) {
          this.displayCode = products.showProductCode
        }
      })
  }
  toggleCode(): void {
    this.store.dispatch({
      type: '[Product] Toggle Product code'
    })
    // this.displayCode = !this.displayCode;
  }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }

  private _listFilter: string = "";

  public get listFilter(): string {
    return this._listFilter;
  }

  public set listFilter(v: string) {
    this._listFilter = v;
    // this.filteredProducts = this.doFilter(v);
  }

  // public doFilter(filterBy: string): IProduct[] {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.products.filter((product: IProduct) =>
  //     product.productName.toLocaleLowerCase().includes(filterBy));
  // }

  products$ = this.productService.products$.pipe(
    catchError(err => {
      this.errorMessage = err;
      return of([]);
    })
  );

  productWithCategories$ = this.categoriesServies.categories$.pipe(
    combineLatestWith(this.products$),
    map(([categories, products]) => products.map(product => ({
      ...product,
      categoryName: categories.find(c => product.categoryId === c.id)?.name
    } as IProduct))),

    catchError(err => {
      this.errorMessage = err;
      return of([]);
    })
  );

  toggleImage(): void {
    this.displayImage = !this.displayImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = message;
  }

  // ngOnInit(): void {

  // this.sub = this.productService.getProducts()
  //   .subscribe({
  //     next: products => {
  //       this.products = products;
  //       this.filteredProducts = this.products;
  //     }
  // });
  // this.products$ = this.productService.getProducts().pipe(
  //   catchError(err => {
  //     this.errorMessage = err;
  //     return of([]);
  //   })
  // );

  // }
}