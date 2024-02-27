import { Action, State, StateContext } from '@ngxs/store';
import { HideButtonAction, ShowButtonAction } from '../actions';
import { Injectable } from '@angular/core';

@State<boolean>({
  name: 'home',
  defaults: false,
})
@Injectable()
export class HomeState {
  @Action(ShowButtonAction)
  showButton(ctx: StateContext<boolean>) {
    ctx.setState(true);
  }

  @Action(HideButtonAction)
  hideButton(ctx: StateContext<boolean>) {
    ctx.setState(false);
  }
}
