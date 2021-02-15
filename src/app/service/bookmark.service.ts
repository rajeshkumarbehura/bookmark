import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookmark } from '../bookmark/bookmark-interface';
import { REST_API } from '../shared/constant';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  constructor(private http: HttpClient) {}

  getBookmarks(): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>(REST_API);
  }

  deleteBookmark(bookmarkId): Observable<Bookmark> {
    return this.http.delete<Bookmark>(REST_API + '/' + bookmarkId);
  }

  createBookmark(bookmark: Bookmark): Observable<Bookmark> {
    return this.http.post<Bookmark>(REST_API, bookmark);
  }
}
