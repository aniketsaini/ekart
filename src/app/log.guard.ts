import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LogGuard implements  CanActivate{
  [x: string]: any;
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }
  async canActivate(route: ActivatedRouteSnapshot) {

    let isLoggedIn = await this.authService.validateUser();
    if(isLoggedIn){
      return true;
    } else {
      this.router.navigateByUrl("login");
    }

  }

}