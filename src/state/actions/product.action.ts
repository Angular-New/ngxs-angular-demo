export class ProductLoadingAction {
  static readonly type = '[Product] Loading';
}

export class ProductLoadSuccessAction {
  static readonly type = '[Product] Load Success';

  constructor(public payload: any[]) {
    //
  }
}

export class ProductLoadFailureAction {
  static readonly type = '[Product] Load Failure';

  constructor(public payload: any) {
    //
  }
}
