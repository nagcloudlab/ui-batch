import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = []

  cartStream = new Subject()

  constructor() { }

  getCartStream() {
    return this.cartStream;
  }

  addToCart(item) {
    this.cart.push(item)
    this.cartStream.next({ cartSize: this.cart.length })
  }


}
