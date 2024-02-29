import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit {
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _productService = inject(ProductService);

  public selectedProduct: any;

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((p) => {
      const id = p['id'];

      this._productService.getProductById(id).subscribe((result) => {
        this.selectedProduct = result;
      });
    });
  }
}
