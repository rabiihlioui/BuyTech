import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { BlogComponent } from './components/blog/blog.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { DashboardComponent } from './adminDashboard/adminComponents/dashboard/dashboard.component';
import { AdminModule } from './adminDashboard/admin/admin.module';
import { AdminMenuComponent } from './adminDashboard/adminComponents/admin-menu/admin-menu.component';
import { AdminHeaderComponent } from './adminDashboard/adminComponents/admin-header/admin-header.component';
import { BlogDashComponent } from './adminDashboard/adminComponents/blog-dash/blog-dash.component';
import { ProductsListComponent } from './adminDashboard/adminComponents/products-list/products-list.component';
import { ClientsListComponent } from './adminDashboard/adminComponents/clients-list/clients-list.component';
import { AddProductComponent } from './adminDashboard/adminComponents/add-product/add-product.component';

import { AgGridModule } from 'ag-grid-angular';
import { ClientJoiningDatePipe } from './adminDashboard/pipes/client-joining-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    BlogComponent,
    GalleryComponent,
    CartComponent,
    ProductComponent,
    CheckoutComponent,
    FaqComponent,
    ContactsComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    ErrorComponent,
    ProductDetailsComponent,
    DashboardComponent,
    AdminMenuComponent,
    AdminHeaderComponent,
    BlogDashComponent,
    ProductsListComponent,
    ClientsListComponent,
    AddProductComponent,
    ClientJoiningDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      progressBar: true,
      progressAnimation: 'increasing'
    }),
    FontAwesomeModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,
    AdminModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
