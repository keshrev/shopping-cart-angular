import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productList: any = [];
  @Output() updateCart: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  // Triggered when user clicks on add to cart button.
  // Used to update the cart count in nav bar through parent component.
  addToCart(product: any, idx: number, status: number) {
    this.productList[idx].status = status;
    this.updateCart.emit({ id: product.id, status: status });
  }
}
