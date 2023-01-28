import { NgModule } from '@angular/core';
import { ConvertToSpacePipe } from '../shared/convert-to-space.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponant } from './product-list.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './state/product.reducer';

@NgModule({
  declarations: [
    ProductListComponant,
    ConvertToSpacePipe,
    ProductDetailComponent,
  ],
  imports: [
    RouterModule.forChild([
      {path:'' , component: ProductListComponant },
      {
        path:'products/:id' ,
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard]
      },
    ]),
    SharedModule,
    StoreModule.forFeature('products',productReducer)
  ]
})
export class ProductModule { }
