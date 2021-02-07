import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userRole: string;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  singin(value) {
    this.authenticationService.authenticate(value.email, value.password).subscribe();
    // added the timeout to delay the navigation and make it after the recieve of the userRole
    setTimeout(()=> {
      if(this.userRole == 'client')
        this.router.navigate(['']);
      else if(this.userRole == 'admin')
        this.router.navigate(['dashboard']);
    }, 1000);
  }

  recieveUserRole() {
    this.authenticationService.userRole.subscribe(role => this.userRole = role);
  }

}
