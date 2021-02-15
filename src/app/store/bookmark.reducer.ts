import { Action } from '@ngrx/store';
import { Bookmark } from '../bookmark/bookmark-interface';
import { BookmarkActions, BookmarkActionTypes } from './bookmark.actions';

export const bookmarkFeatureKey = 'bookmark';

export interface State {
  bookmark: Bookmark[];
  error: string;
}

export const initialState: State = {
  bookmark: [],
  error: '',
};

export function reducer(state = initialState, action: BookmarkActions): State {
  switch (action.type) {
    case BookmarkActionTypes.LoadBookmarks:
      return {
        ...state,
      };

    case BookmarkActionTypes.LoadBookmarksSuccess:
      return {
        ...state,
        bookmark: action.payload.data,
        error: '',
      };

    case BookmarkActionTypes.LoadBookmarksFailure:
      return {
        ...state,
        bookmark: [],
        error: action.payload.error,
      };

    case BookmarkActionTypes.CreateBookmark:
      return {
        ...state,
        bookmark: [action.payload],
        error: '',
      };

    case BookmarkActionTypes.DeleteBookmarks:
      return {
        ...state,
        bookmark: state.bookmark.filter((item) => item.id !== action.payload),
        error: '',
      };
    default:
      return state;
  }
}
