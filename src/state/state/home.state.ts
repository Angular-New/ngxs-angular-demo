import { Action, State, StateContext } from '@ngxs/store';
import { HideButtonAction, ShowButtonAction } from '../actions';

@State<boolean>({
  name: 'home',
  defaults: false,
})
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
