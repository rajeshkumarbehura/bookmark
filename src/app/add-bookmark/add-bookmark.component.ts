import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Bookmark } from '../bookmark/bookmark-interface';
import { BookmarkService } from '../service/bookmark.service';
import * as BookmarkActions from '../store/bookmark.actions';
import { FormControl, Validators } from '@angular/forms';
import { BOOKMARK_GROUPS } from '../shared/constant';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.css'],
})
export class AddBookmarkComponent implements OnInit {
  bookmarkName = new FormControl('', [Validators.required]);
  bookmarkUrl = new FormControl('', [Validators.required]);
  bookmarkGroup = new FormControl('', [Validators.required]);

  constructor(private store: Store, private router: Router) {}
  ngOnInit() {}

  createBookmark() {
    const newBookmark: Bookmark = { id: '', name: '', url: '', group: '' };
    newBookmark.name = this.bookmarkName.value;
    newBookmark.url = this.bookmarkUrl.value;
    newBookmark.group = this.bookmarkGroup.value;

    this.store.dispatch(new BookmarkActions.CreateBookmark(newBookmark));
    this.router.navigate(['/']);
  }
}
