import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input({ alias: 'product' }) product: any;

  @Output() orderProduct = new EventEmitter<any>();
  @Output() removeProduct = new EventEmitter<number>();

  public userService: UserService = inject(UserService);

  orderProductClick() {
    this.orderProduct.emit(this.product);
  }

  removeProductClick(id: number) {
    this.removeProduct.emit(id);
  }

  showDetails(id: number) {
    void inject(Router).navigate([`products/${id}`]);
  }

  public rating = 3; // Initialize to some default value between 1-5
  public stars = [1, 2, 3, 4, 5];

  setRating(star: number): void {
    this.rating = star;
  }

  getBadgeClass(category: string): string {
    switch (category) {
      case 'electronics':
        return 'badge text-bg-primary';
      case 'jewelery':
        return 'badge text-bg-secondary';
      case "men's clothing":
        return 'badge text-bg-success';
      case "women's clothing":
        return 'badge text-bg-danger';
      default:
        return 'badge';
    }
  }
}
