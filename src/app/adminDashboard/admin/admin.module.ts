import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from '../admin-routing/admin-routing.module';
import { ClientJoiningDatePipe } from '../pipes/client-joining-date.pipe';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [
    ClientJoiningDatePipe
  ]
})
export class AdminModule { }
