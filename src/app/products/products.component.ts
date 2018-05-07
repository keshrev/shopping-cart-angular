import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  productListOn: any;
  productUpdateOn: any;
  productsMap: any = { status: 'loading', productsData: {} };
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    // Fetching the product details
    this.getProductsList();
  }

  ngOnDestroy() {
    // Unsubscribing to events/observables when component is destroying.
    try {
      this.productListOn.unsubscribe();
      this.productUpdateOn.unsubscribe();
    } catch (err) { }
  }

  // Service call to fetch the Products from the server.
  getProductsList() {
    this.productListOn = this.productsService.getProductsList().subscribe((response) => {
      this.productsMap.status = response.status;
      this.productsMap.productsData = response.data;
    }, (error) => {
      this.productsMap.status = 204;
      console.log(error);
    });
  }

  // Event will emit from child product list component when products are added/remove to/from cart
  updateCartCount(evt: any) {
    this.productUpdateOn = this.productsService.updateProductToCart(evt).subscribe((response) => {
      if (response.status === 200) {
        if (evt.status === 1) {
          this.productsMap.productsData.cartCount++;
        } else {
          this.productsMap.productsData.cartCount--;
        }
      }
    }, (error) => {
      alert('Oops something went wrong! please try after some time!!');
      console.log(error);
    });
  }
}
