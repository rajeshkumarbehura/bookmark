import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { select } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Bookmark } from './bookmark-interface';
import * as BookmarkActions from '../store/bookmark.actions';
import * as BookmarkSelector from '../store/bookmark.selectors';
import { BookmarkService } from '../service/bookmark.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css'],
})
export class BookmarkComponent implements OnChanges {
  filteredBookmarks: Bookmark[];
  errorMessage = '';
  @Input() groupName: string;

  constructor(private store: Store, private service: BookmarkService) {}

  ngOnChanges() {
    this.getBookmarks();
  }

  getBookmarks() {
    /* this.service.getBookmarks().subscribe(data=>{
       let bookmarks=data;
       this.filteredBookmarks = bookmarks.filter(ele=>ele.group==this.groupName)
    }) */

    this.store.dispatch(new BookmarkActions.LoadBookmarks()); // action dispatch

    this.store.pipe(select(BookmarkSelector.getBookmarks)).subscribe((ele) => {
      const bookmarks = ele;
      this.filteredBookmarks = bookmarks.filter((data) => data.group === this.groupName);
    });

    this.store.pipe(select(BookmarkSelector.getError)).subscribe((err) => {
      this.errorMessage = err;
    });
  }

  deleteBookmark(bookmarkId) {
    this.store.dispatch(new BookmarkActions.DeleteBookmarks(bookmarkId));
  }
}
