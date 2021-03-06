import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  shippingPrice;
  items = [];
  
  constructor(
    private http: HttpClient
  ) { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  getShippingType(shippingPrice){
    debugger;
    this.shippingPrice = shippingPrice;
  }

  getTotalPrice(items, property){
    debugger;
    return items.reduce(function(a, b){return a + b[property];}, 0);
  }

}