import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../adminComponents/dashboard/dashboard.component';
import { BlogDashComponent } from '../adminComponents/blog-dash/blog-dash.component';
import { ProductsListComponent } from '../adminComponents/products-list/products-list.component';
import { ClientsListComponent } from '../adminComponents/clients-list/clients-list.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'blog-dashboard', component: BlogDashComponent },
  { path: 'products-list', component: ProductsListComponent },
  { path: 'clients-list', component: ClientsListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminRoutingModule { }
