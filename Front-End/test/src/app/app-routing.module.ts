import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetetComponent } from './components/add-detet/add-detet.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProduitComponent } from  './components/update-produit/update-produit.component';
import { BasketComponent } from './components/basket/basket.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [

  {path:'', component: HomeComponent},
  {path:'products', component: ProductsComponent},
  {path:'basket', component: BasketComponent},
  {path:'contactus', component: ContactusComponent},
  {path:'login', component: LoginComponent},
  {path: 'ajouterproduct', component: AddProductComponent},
  {path: 'modifierproduct', component:AddDetetComponent },
  {path: "",redirectTo:"modifierproduct",pathMatch:"full"},
  {path:  "updateProduit/:id", component:UpdateProduitComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
