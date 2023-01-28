import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'amzn-products',
  templateUrl: './product-list.component.html',
  // styles: ['thead{color:pink}'],
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponant implements OnInit {

  public birthDate: Date | undefined;
  public age: number | undefined;

  public CalculateAge(): void {
    if (this.birthDate) {
      var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
      this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
  }

  myDate = Date.now();

  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }

  pageTitle: string = "Product List";

  imageW: number = 100;

  imageMar: number = 15;

  myPhoto: string = "my photo";

  myImage: string = "assets/images/aleppo.jpg";

  displayImage: boolean = true;

  private _listFilter: string = "";

  public get listFilter(): string {
    return this._listFilter;
  }

  public set listFilter(v: string) {
    this._listFilter = v;
    this.filteredProducts = this.doFilter(v);
  }

  public doFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct)=>
            product.productName.toLocaleLowerCase().includes(filterBy));
  }

  filteredProducts: IProduct[] = [];

  constructor() {
    console.log("constroctor...");
  }
  ngOnInit(): void {
    console.log("product list initialztion");
    this._listFilter = 'abdo';
  }
  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "abdo",
      "productCode": "1-cc",
      "releseDate": "March 19, 2022",
      "description": "Hello Every Body!!!!!!!",
      "price": 500,
      "starRating": 3.2,
      "imgUrl": "assets/images/aleppo.jpg"
    },
    {
      "productId": 2,
      "productName": "mobayed",
      "productCode": "1-cc",
      "releseDate": "March 19, 2022",
      "description": "Hello Every Body!!!!!!!",
      "price": 300,
      "starRating": 4.2,
      "imgUrl": "assets/images/aleppo.jpg"
    },
  ];


  toggleImage(): void {
    this.displayImage = !this.displayImage;
    console.log('toggle button');
  }
}