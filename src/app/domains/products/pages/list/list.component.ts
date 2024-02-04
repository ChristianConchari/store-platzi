import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);

  private cartService = inject(CartService);

  constructor() {
    const initProducts = [
      {
        id: 1,
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?=23',
        createdAt: new Date().toISOString(),
      },
      {
        id: 2,
        title: 'Pro 2',
        price: 100,
        image: 'https://picsum.photos/640/640?=19',
        createdAt: new Date().toISOString(),
      },
      {
        id: 3,
        title: 'Pro 3',
        price: 100,
        image: 'https://picsum.photos/640/640?=12',
        createdAt: new Date().toISOString(),
      },
      {
        id: 4,
        title: 'Pro 4',
        price: 100,
        image: 'https://picsum.photos/640/640?=28',
        createdAt: new Date().toISOString(),
      },
      {
        id: 5,
        title: 'Pro 5',
        price: 100,
        image: 'https://picsum.photos/640/640?=11',
        createdAt: new Date().toISOString(),
      },
      {
        id: 6,
        title: 'Pro 6',
        price: 100,
        image: 'https://picsum.photos/640/640?=51',
        createdAt: new Date().toISOString(),
      },
    ];

    this.products.set(initProducts);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
