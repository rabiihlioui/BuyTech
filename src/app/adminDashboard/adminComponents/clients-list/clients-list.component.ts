import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import { ClientJoiningDatePipe } from '../../pipes/client-joining-date.pipe';

import * as moment from 'moment'

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  columnDefs = [
    { headerName: 'First Name', field: 'firstName', sortable: true, filter: true },
    { headerName: 'Last Name', field: 'lastName', sortable: true, filter: true },
    { headerName: 'Gender', field: 'gender', sortable: true, filter: true },
    { headerName: 'Email', field: 'email', sortable: true, filter: true },
    { headerName: 'Password', field: 'password', sortable: true, filter: true },
    { headerName: 'Joining Date', field: 'joiningDate', sortable: true, filter: true,
        cellRenderer: (data) => {
          return moment(data.value).format('MM/DD/YYYY')
        }
   },
    { headerName: 'Phone Number', field: 'phoneNumber', sortable: true, filter: true },
  ];

  rowData = [];

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit() {
    this.clientService.getClientsList().subscribe(
      data => this.rowData = data
    );
  }

}
