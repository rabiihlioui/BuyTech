import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private clientService: ClientService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  registerNewClient(client: Client){
    this.clientService.getClientByEmail(client.email).subscribe(
      data => this.displayToastr('Client is already registered. Try to login'),
      error => {
        client.joiningDate = new Date();
        this.clientService.createClient(client).subscribe();
      }
    );
  }

  displayToastr(message: string) {
    this.toastrService.error(message, 'Error', {
      timeOut: 6000,
      progressBar: false
    });

/*     this.toastrService.success('Some messages', 'title', {
      timeOut: 4000,
      progressBar: false
    });

    this.toastrService.error('Some messages', 'title', {
      timeOut: 6000,
      progressBar: false
    });

    this.toastrService.warning('Some messages', 'title', {
      timeOut: 6000,
      progressBar: false
    });

    this.toastrService.info('Some messages', 'title', {
      timeOut: 6000,
      progressBar: false
    }); */

  }

}
