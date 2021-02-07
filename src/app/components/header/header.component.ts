import { Component, OnInit } from '@angular/core';
import { ActivateMenuItemService } from 'src/app/services/activate-menu-item.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean;

  constructor(
    public activateMenuItemService: ActivateMenuItemService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.authenticationService.userLoggedIn.subscribe(state => this.userState(state));
  }

  ngOnInit() {
  }

  userState(state: boolean) {
    this.isUserLoggedIn = state;
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['']);
  }

}
