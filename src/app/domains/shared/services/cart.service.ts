import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);
  total = computed(() => {
    return this.cart().reduce((total, product) => total + product.price, 0);
  });

  constructor() {}

  addToCart(product: Product) {
    this.cart.update((prevCart) => [...prevCart, product]);
  }

  removeFromCart(product: Product) {
    this.cart.update((prevCart) => prevCart.filter((p) => p.id !== product.id));
  }
}
