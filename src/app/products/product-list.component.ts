import { Component } from '@angular/core';

@Component({
  selector: 'amzn-products',
  templateUrl: './product-list.component.html',

})
export class ProductListComponant {

  pageTitle: string = "Product List";

  imageW: number = 100;
  imageMar: number = 5;
  
  myPhoto:string = "my photo"

  myImage:string = "assets/images/aleppo.jpg";
  
  displayImage: boolean = true;

  listFilter: string = 'abdo';

  products: any[] = [
    {
      "productId": 1,
      "productName": "abdo",
      "productCode": "1cc",
      "productAvai": "2.2.2022",
      "productPrice": "500",
      "productRating": "3.2",
    },
    {
      "productId": 2,
      "productName": "mobayed",
      "productCode": "1cc",
      "productAvai": "2.2.2022",
      "productPrice": "500",
      "productRating": "3.2",
    },
    {
      "productId": 3,
      "productName": "abdalah",
      "productCode": "1cc",
      "productAvai": "2.2.2022",
      "productPrice": "500",
      "productRating": "3.2",
    },
  ];

  toggleImage(): void {
    this.displayImage = !this.displayImage;
    console.log('toggle button');
  }
}
