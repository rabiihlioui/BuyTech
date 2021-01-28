import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    ProductDetailsComponent
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
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
