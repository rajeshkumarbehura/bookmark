import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import * as BookmarkActions from './bookmark.actions';
import {CreateBookmark, DeleteBookmarks} from './bookmark.actions';
import {Observable, of} from 'rxjs';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {BookmarkService} from '../service/bookmark.service';

@Injectable()
export class BookmarkEffects {
  constructor(private actions$: Actions, private bookmarkService: BookmarkService) {}

  @Effect()
  loadBookmarks$: Observable<Action> = this.actions$.pipe(
    ofType(BookmarkActions.BookmarkActionTypes.LoadBookmarks),
    mergeMap((action) =>
      this.bookmarkService.getBookmarks().pipe(
        map((ele) => new BookmarkActions.LoadBookmarksSuccess({ data: ele })),
        catchError((err) => of(new BookmarkActions.LoadBookmarksFailure({ error: err })))
      )
    )
  );

  @Effect({ dispatch: false })
  deleteBookmarks$ = this.actions$.pipe(
    ofType<DeleteBookmarks>(BookmarkActions.BookmarkActionTypes.DeleteBookmarks),
    switchMap((action) => this.bookmarkService.deleteBookmark(action.payload))
  );

  @Effect()
  postBookmarkData$ = this.actions$.pipe(
    ofType<CreateBookmark>(BookmarkActions.BookmarkActionTypes.CreateBookmark),
    mergeMap((action) => {
      return this.bookmarkService.createBookmark(action.payload).pipe(
        map((data) => {
          return new BookmarkActions.LoadBookmarks();
        })
      );
    })
  );
}
