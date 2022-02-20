import { Injectable } from '@angular/core';
import { Basket, BasketProduct } from '../model/model';
@Injectable({
providedIn: 'root'
})
export class BasketService {
    basket: Basket;
    constructor() {
        this.basket = new Basket([], 0);
    }

    getBasket() {
        return this.basket;
    }

    addProduct(product: any){
        const index = this.basket.products.findIndex(e => e.id == product.id);
        if(index >= 0 ) {
            this.basket.products[index].qt += 1;
            this.basket.products[index].total *= 2; 
        }else {
            this.basket.products.push(new BasketProduct(product.id, product, 1, product.prix));
        }
        this.basket.total = this.basket.total + product.prix;
    }

    removeProduct(product: any){
        let productsSize = this.basket.products.length;
        this.basket.products = this.basket.products.filter(e => e.id != product.id);
        if(productsSize > this.basket.products.length){
            this.basket.total = this.basket.total - product.prix;
        }
    }

    removeBasket(){
        this.basket = new Basket([], 0);
    }
}