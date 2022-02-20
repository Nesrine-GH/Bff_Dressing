import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/model';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {
  product: Product;
  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
    this.productsService.find(id).subscribe((data) => {
      if (data.body != null) {
        this.product = data.body
        console.log(this.product);
      }
    })
  }
  updateproduct(productForm: any) {
    console.log(productForm.value);
    this.productsService.updateProduct(productForm.value).subscribe(
      data => {
        alert('updated');
      })
  }
}