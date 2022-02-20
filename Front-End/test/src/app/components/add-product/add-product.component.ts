import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  message: string = "";
  products:any;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getAll()
  }
   createProduct(Product: any) {
    let data = Product.value
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.productsService.addProduct(data).subscribe(reponse => {
         console.log('Bien Enregistrer')
       })
   }
   getAll(){
    this.productsService.getAllProducts().subscribe( data => {
      this.products = data;
      console.log(this.products)
    });
  }
  
}
