import { Action } from '@ngrx/store';
import { Bookmark } from '../bookmark/bookmark-interface';

export enum BookmarkActionTypes {
  LoadBookmarks = '[Bookmark] Load Bookmarks',
  LoadBookmarksSuccess = '[Bookmark] Load Bookmarks Success',
  LoadBookmarksFailure = '[Bookmark] Load Bookmarks Failure',
  DeleteBookmarks = '[Bookmark] Delete Bookmark',
  CreateBookmark = '[Bookmark] create Bookmark',
}

export class LoadBookmarks implements Action {
  readonly type = BookmarkActionTypes.LoadBookmarks;
}

export class LoadBookmarksSuccess implements Action {
  readonly type = BookmarkActionTypes.LoadBookmarksSuccess;
  constructor(public payload: { data: Bookmark[] }) {}
}

export class LoadBookmarksFailure implements Action {
  readonly type = BookmarkActionTypes.LoadBookmarksFailure;
  constructor(public payload: { error: any }) {}
}

export class DeleteBookmarks implements Action {
  readonly type = BookmarkActionTypes.DeleteBookmarks;
  constructor(public payload: string) {}
}

export class CreateBookmark implements Action {
  readonly type = BookmarkActionTypes.CreateBookmark;
  constructor(public payload: Bookmark) {}
}

export type BookmarkActions = LoadBookmarks | LoadBookmarksSuccess | LoadBookmarksFailure | DeleteBookmarks | CreateBookmark;
