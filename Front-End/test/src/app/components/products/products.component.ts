import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/model';
import { ProductsService } from 'src/app/services/products.service';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product:any;
  products: any;
  
  // message : string = "";
  constructor( private  productsService :ProductsService, private basketService : BasketService ) {}

  listeproduits:any;
  toto:any
  ngOnInit(): void {
    this.getAll();
  }


  //// afficher 
  getAll(){
    this.productsService.getAllProducts().subscribe( data => {
      this.products = data;
      console.log(this.products)
    });
  }
  


  /// methode modifier 
//   updateproducts(product: any) {
//   this.productsService.updateProduct(product).subscribe( data => {
//     this.message = "modification done";
//     this.getAll();
//   }, error => {
//     this.message = "modification non done";
//   })
// }


  //// methode supprimer 
  deleteProduct(id: number){
    this.productsService.deleteProduct(id).subscribe( data => {
      this.products = this.products.filter( (element: { id: number; }) => element.id != id)
    }, error => {
      console.log(error);
    })
  }

  //// methode supprimer 
  deleteProductById(id: number){
    this.productsService.deleteProduct(id).subscribe( data => {
      this.products = this.products.filter( (element: { id: number; }) => element.id != id)
    }, error => {
      console.log(error);
    })
  }


  //// boutton add to basket
  addtoBasket(product: any){
    this.basketService.addProduct(product);
    alert("produit ajoute")
  }

  getprixBetween(toto: any) {

    console.log(toto);
    var paramA = toto.min;
    var paramB = toto.max;
    this.productsService.getprix(paramA, paramB).subscribe(data => {

      this.products = data;
      console.log(this.toto);
    })
  
}}