import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ActivateMenuItemService } from '../activate-menu-item.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientRouterGuardService implements CanActivate {

  isUserLoggedIn: boolean;
  userRole: string;

  constructor(
    private authenticationService: AuthenticationService,
    private activeMenuItemService: ActivateMenuItemService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.authenticationService.userLoggedIn.subscribe(state => this.isUserLoggedIn = state);
    this.authenticationService.userRole.subscribe(role => this.userRole = role);
    if (this.isUserLoggedIn && this.userRole == 'client') {
      return true;
    }
    this.activeMenuItemService.activateHome();
    this.router.navigate(['']);
    return false;
  }

}
