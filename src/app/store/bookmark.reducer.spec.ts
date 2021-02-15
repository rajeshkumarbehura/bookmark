import { initialState, reducer } from './bookmark.reducer';
import { CreateBookmark, DeleteBookmarks, LoadBookmarks, LoadBookmarksFailure, LoadBookmarksSuccess } from './bookmark.actions';

describe('Bookmark Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });

  describe('known action', () => {
    const mockBookmark = {
      id: '',
      name: 'travel tour',
      url: 'travel.com',
      group: 'travel',
    };

    it('should return the previous state for LoadBookmarks', () => {
      const result = reducer({ bookmark: [mockBookmark], error: null }, new LoadBookmarks());
      expect(result.bookmark[0]).toEqual(mockBookmark);
    });

    it('should return the previous state for LoadBookmarksSuccess', () => {
      const result = reducer({ bookmark: [], error: null }, new LoadBookmarksSuccess({ data: [mockBookmark] }));
      expect(result.bookmark[0]).toEqual(mockBookmark);
    });

    it('should return the previous state for LoadBookmarksFailure', () => {
      const result = reducer({ bookmark: [], error: null }, new LoadBookmarksFailure({ error: 'error' }));
      expect(result.error).toEqual('error');
    });

    it('should return the previous state for CreateBookmark', () => {
      const result = reducer({ bookmark: [], error: null }, new CreateBookmark(mockBookmark));
      expect(result.bookmark[0]).toEqual(mockBookmark);
    });

    it('should return the previous state for DeleteBookmarks', () => {
      const result = reducer({ bookmark: [], error: null }, new DeleteBookmarks('Id123'));
      expect(result.bookmark.length).toEqual(0);
    });
  });
});
