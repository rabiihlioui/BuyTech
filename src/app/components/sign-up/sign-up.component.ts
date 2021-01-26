import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit() {
  }

  registerNewClient(client: Client){
    client.joiningDate = new Date();
    this.clientService.createClient(client).subscribe();
  }

}
