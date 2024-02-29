import { Component, inject } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css'],
})
export class ProductNewComponent {
  order: Order = {
    bookTitle: '',
    authorName: '',
    quantity: 0,
    deliveryAddress: '',
  };

  product = {
    title: '',
    price: null,
    description: '',
    image: '',
    category: '',
  };

  categories = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  // constructor(private productService: ProductService) {}

  addProduct(): void {
    inject(ProductService)
      .addProduct(this.product)
      .subscribe((data) => {
        console.log('Product added [product]: ', this.product);
      });
  }
}
