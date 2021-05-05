import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.scss']
})
export class CartBadgeComponent implements OnInit {

  cartSize = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartStream()
      .subscribe((cartDet: any) => {
        this.cartSize = cartDet.cartSize;
      })
  }

}
