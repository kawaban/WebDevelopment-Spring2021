import { Component, OnInit } from '@angular/core';

import { products } from '../products';

import { ActivatedRoute } from '@angular/router';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-bottoms',
  templateUrl: './bottoms.component.html',
  styleUrls: ['./bottoms.component.css']
})
export class BottomsComponent implements OnInit {
  product: any;
  products = products;
  likes = 0;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }
  likeProduct(){
    this.likes++;
  }

}
