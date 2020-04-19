import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  totalPrice;
  shippingPrices;
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
   }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.totalPrice = this.cartService.getTotalPrice(this.items, 'price');
    this.shippingPrices = this.cartService.getShippingPrices();
  }

  onSubmit(customerData) {
    // Process checkout data here
    debugger;
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

  selectShippingType(type){
    debugger;
    this.cartService.selectShippingType(type);
    console.debug('Modalità di spedizione scelta');
  }



}