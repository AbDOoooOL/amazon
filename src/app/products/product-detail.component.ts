import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  // selector: 'amzn-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  title = 'Product Detail: ';
  product: IProduct | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ){}

  ngOnInit(): void {
    this.title += this.route.snapshot.paramMap.get('id');

    this.product = {
      "productId": 1,
      "productName": "abdo",
      'productShortCut': '123',
      "productCode": "1-cc",
      "releseDate": "March 19, 2022",
      "description": "Hello Every Body!!!!!!!",
      "price": 500,
      "starRating": 3.2,
      "imgUrl": "assets/images/aleppo.jpg",
      "categoryId": 1
  };

    // this.route.paramMap.subscribe(
    //   params => console.log(params.get('id'))
    // )
  }
  onBack():void{
    this.router.navigate(['/products']);
  }
}
