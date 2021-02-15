import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../service/bookmark.service';
import { BOOKMARK_GROUPS } from '../shared/constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: BookmarkService) {}

  groups = BOOKMARK_GROUPS;
  groupName = this.groups[0];

  ngOnInit() {}
}
