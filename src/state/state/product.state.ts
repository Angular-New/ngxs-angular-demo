import { Action, State, StateContext, StateToken } from '@ngxs/store';
import {
  ProductLoadFailureAction,
  ProductLoadingAction,
  ProductLoadSuccessAction,
} from '../actions';
import { ProductService } from '../../app/services/product.service';
import { inject, Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';

const PRODUCTS_STATE_TOKEN = new StateToken<ProductStateModel>('products');

export interface ProductStateModel {
  loading: boolean;
  products: any[];
  error: any;
}

@State<ProductStateModel>({
  name: PRODUCTS_STATE_TOKEN,
  defaults: {
    loading: false,
    products: [],
    error: null,
  },
})
@Injectable()
export class ProductState {
  private readonly _productService: ProductService = inject(ProductService);

  @Action(ProductLoadingAction)
  productLoading(ctx: StateContext<ProductStateModel>) {
    ctx.patchState({ loading: true });

    return this._productService.getProducts().pipe(
      tap((result) => {
        ctx.dispatch(new ProductLoadSuccessAction(result));
      }),
      catchError((error) => {
        ctx.dispatch(new ProductLoadFailureAction(error));

        return of(error);
      }),
    );
  }

  @Action(ProductLoadSuccessAction)
  productLoadSuccess(
    ctx: StateContext<ProductStateModel>,
    action: ProductLoadSuccessAction,
  ) {
    ctx.patchState({
      loading: false,
      products: action.payload,
    });
  }

  @Action(ProductLoadFailureAction)
  productLoadFailure(
    ctx: StateContext<ProductStateModel>,
    action: ProductLoadFailureAction,
  ) {
    ctx.patchState({
      loading: false,
      error: action.payload,
    });
  }
}
