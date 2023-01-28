import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { WelcomeComponant } from './home/welcome-componants';
import { RouterModule } from '@angular/router';

import { CustomInterceptor } from './custom.interceptor';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponant
    // ProductCategoryService
  ],
  imports: [
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),

    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:'ar',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot([
      {path:'welcome' , component: WelcomeComponant },
      {
        path:'products',
        ///////////////////// lazy load module
        loadChildren:()=>
          import('./products/product.module').then(
            m => m.ProductModule
          )
      },
      {
        path:'account',
        ///////////////////// lazy load module
        loadChildren:()=>
          import('./account/account.module').then(
            m => m.AccountModule
          )
      },
      // General Path
      {path:'' , redirectTo: 'welcome' , pathMatch: 'full' },
      {path:'**' , redirectTo: 'welcome' , pathMatch: 'full' }
    ]),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument(
      {
        name: 'Amazone test app',
        maxAge: 25,
        logOnly: !isDevMode()
      }
    ),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}