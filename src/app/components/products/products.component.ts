import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { ProductLoadingAction } from '../../../state/actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  private readonly _store = inject(Store);

  public products$ = this._store.select(state => state.products.products);
  public product: any;

  ngOnInit(): void {
    this._store.dispatch(new ProductLoadingAction());
  }

  public orderProductNow(product: any) {
    console.log('Product to be ordered: ', product);
  }

  public removeProductNow(id: number) {
    console.log('Product to be removed: ', id);
  }
}
