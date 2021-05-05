import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {


  @Input('value')
  item;

  currentTab = 1

  // @Output()
  // buy = new EventEmitter()

  reviews = [
    { author: 'who1', stars: 4, body: 'sample-review-1' },
    { author: 'who2', stars: 3, body: 'sample-review-2' }
  ]

  // DI
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  isTabSelected(tab) {
    return this.currentTab === tab
  }
  changeTab(tab, event) {
    event.preventDefault()
    this.currentTab = tab
  }

  handleBuy(event) {
    // this.buy.emit({ item: this.item })
    this.cartService.addToCart(this.item)
  }

}
