import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/model/model';
@Component({
  selector: 'app-add-detet',
  templateUrl: './add-detet.component.html',
  styleUrls: ['./add-detet.component.css']
})
export class AddDetetComponent implements OnInit {
  produits:Product[];
  products: any;
  message: string = "";
  constructor(private productsService: ProductsService) {
    this.produits=[];
   }
  ngOnInit(): void {
    this.getAll();
  }


  //// afficher 
  getAll() {
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data;
      console.log(this.products)
    });
  }

  deleteProduct(l: any) {
    console.log(l.id);
    let conf = confirm("Etes-vous sûr ?");
    if (conf){
      this.productsService.deleteProduct(l.id).subscribe(reponse => {
        this.getAll()
      });
    }
  }

}


