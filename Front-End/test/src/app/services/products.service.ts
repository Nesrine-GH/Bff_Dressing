import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Product } from '../model/model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = "http://localhost:8080/products";
  constructor(private http: HttpClient) { }
  // pour afficher
  getAllProducts() {
    return this.http.get(this.url);
  }
  // pour update
  updateProduct(product: any) {
    return this.http.put(this.url + '/' + product.id, product);
  }
  // pour ajouter
  addProduct(Product: any) {
    return this.http.post(this.url, Product);
  }
  // pour supprimer
  deleteProduct(id: number) {
    return this.http.delete(this.url + '/' + id)
  }
  find(id: number): Observable<HttpResponse<Product>> {
    return this.http.get<Product>(this.url + '/' + id, {
      observe:
        'response'
    });
  }



getprix(paramA: any, paramB: any){
  return this.http.get("http://localhost:8080/products/search/byprix?minprix=" + paramA + "&maxprix=" + paramB)
}
    
} 

