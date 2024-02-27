import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';

import { HideButtonAction, ShowButtonAction } from '../../../state/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private _store: Store = inject(Store);

  public isShowMore$ = this._store.select(state => state.home);

  public showMore(): void {
    this._store.dispatch(new ShowButtonAction());
  }

  public showLess(): void {
    this._store.dispatch(new HideButtonAction());
  }
}
