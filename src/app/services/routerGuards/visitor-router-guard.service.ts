import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ActivateMenuItemService } from '../activate-menu-item.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VisitorRouterGuardService {

  isUserLoggedIn: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private activeMenuItemService: ActivateMenuItemService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.authenticationService.userLoggedIn.subscribe(state => this.isUserLoggedIn = state);
    if (!this.isUserLoggedIn) {
      return true;
    }
    this.activeMenuItemService.activateHome();
    this.router.navigate(['']);
    return false;
  }

}
