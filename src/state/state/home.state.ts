import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { HideButtonAction, ShowButtonAction } from '../actions';
import { Injectable } from '@angular/core';

const HOME_STATE_TOKEN = new StateToken<unknown>('home');

@State<boolean>({
  name: HOME_STATE_TOKEN,
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
