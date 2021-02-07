import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { BlogComponent } from './components/blog/blog.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { DashboardComponent } from './adminDashboard/adminComponents/dashboard/dashboard.component';
import { BlogDashComponent } from './adminDashboard/adminComponents/blog-dash/blog-dash.component';
import { ProductsListComponent } from './adminDashboard/adminComponents/products-list/products-list.component';
import { ClientsListComponent } from './adminDashboard/adminComponents/clients-list/clients-list.component';
import { AddProductComponent } from './adminDashboard/adminComponents/add-product/add-product.component';
import { ClientRouterGuardService } from './services/routerGuards/client-router-guard.service';
import { AdminRouterGuardService } from './services/routerGuards/admin-router-guard.service';

const routes: Routes = [
  { 
    path: '',
    component: HeaderComponent,
    children:
    [
      { path: '', component: HomeComponent },
      { 
        path: 'catalog',
        component: CatalogComponent,
        children:
        [
          { path: 'productDetails/:prodId', component: ProductDetailsComponent }
        ]
      },
      { path: 'blog', component: BlogComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'cart', component: CartComponent, canActivate: [ClientRouterGuardService] },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signUp', component: SignUpComponent },
      { path: '', component: HomeComponent },

    ],
  },
  { 
    path: 'dashboard',
    component: DashboardComponent,
    children:
    [
      { path: 'blog-dashboard', component: BlogDashComponent, canActivate: [AdminRouterGuardService] },
      { path: 'products-list', component: ProductsListComponent, canActivate: [AdminRouterGuardService] },
      { path: 'clients-list', component: ClientsListComponent, canActivate: [AdminRouterGuardService] },
      { path: 'add-product', component: AddProductComponent, canActivate: [AdminRouterGuardService] }
    ],
    canActivate: [AdminRouterGuardService]
  },
  { path: '**' , component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
