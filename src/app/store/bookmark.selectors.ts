import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './bookmark.reducer';

const getFeatureState = createFeatureSelector<State>('bookmark');

export const getBookmarks = createSelector(getFeatureState, (state) => state.bookmark);

export const getError = createSelector(getFeatureState, (state) => state.error);

export const deleteBookmark = createSelector(getFeatureState, (state) => state.bookmark);

export const createBookmark = createSelector(getFeatureState, (state) => state.bookmark);
