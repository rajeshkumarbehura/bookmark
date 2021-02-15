import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromBm from '../store/bookmark.reducer';

export const stateFeatureKey = 'state';

export interface State {
  [fromBm.bookmarkFeatureKey]: fromBm.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromBm.bookmarkFeatureKey]: fromBm.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
