import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { BasketComponent } from './components/basket/basket.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddDetetComponent } from './components/add-detet/add-detet.component';
import { UpdateProduitComponent } from  './components/update-produit/update-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    BasketComponent,
    AdminComponent,
    ContactusComponent,
    LoginComponent,
    AddProductComponent,
    AddDetetComponent,
    UpdateProduitComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
