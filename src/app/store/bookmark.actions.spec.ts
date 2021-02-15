import * as BookmarkActions from './bookmark.actions';

describe('BookmarkAction', () => {
  it('should create an instance of LoadBookmarks', () => {
    expect(new BookmarkActions.LoadBookmarks()).toBeTruthy();
  });

  it('should create an instance of LoadBookmarksSuccess', () => {
    expect(new BookmarkActions.LoadBookmarksSuccess({ data: null })).toBeTruthy();
  });

  it('should create an instance of LoadBookmarksFailure', () => {
    expect(new BookmarkActions.LoadBookmarksFailure({ error: null })).toBeTruthy();
  });

  it('should create an instance of DeleteBookmarks', () => {
    expect(new BookmarkActions.DeleteBookmarks(null)).toBeTruthy();
  });

  it('should create an instance of CreateBookmark', () => {
    expect(new BookmarkActions.CreateBookmark(null)).toBeTruthy();
  });
});
