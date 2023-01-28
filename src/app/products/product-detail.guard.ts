import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let id  = Number(route.paramMap.get('id'));
      if(isNaN(id) || id > 10)
      {
        console.log(`catched you!!`);
        alert('your id is inccorect, you will be redirected to the main products page...');
        this.router.navigate(['/products']);
        return false;
      }
    return true;
  } 
}