import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { BookmarkComponent } from './bookmark.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import { HomeComponent } from '../home/home.component';
import { AddBookmarkComponent } from '../add-bookmark/add-bookmark.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../reducers';
import { EffectsModule } from '@ngrx/effects';
import { BookmarkEffects } from '../store/bookmark.effects';
import { REST_API } from '../shared/constant';

describe('BookmarkComponent', () => {
  let component: BookmarkComponent;
  let fixture: ComponentFixture<BookmarkComponent>;
  let httpClient: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatRadioModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot({ ...reducers }),
        EffectsModule.forRoot([BookmarkEffects]),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [HomeComponent, AddBookmarkComponent, BookmarkComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    httpClient = TestBed.get(HttpClient);
    fixture = TestBed.createComponent(BookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Click on Delete Button, trigger the Delete Rest API, using state,action, effect
  it('should delete trigger Rest Delete API', fakeAsync(() => {
    // spy on http delete method to validate how it is being called
    spyOn(httpClient, 'delete').and.callThrough();

    // test data prepare
    const mockBookmark = {
      id: '123',
      name: 'travel tour',
      url: 'travel.com',
      group: 'travel',
    };
    component.filteredBookmarks = [mockBookmark];
    fixture.detectChanges();

    const deleteButton = fixture.nativeElement.querySelector('button');
    // trigger delete action
    deleteButton.click();
    tick();
    expect(component).toBeTruthy();

    // validate http delete method is called or not
    expect(httpClient.delete).toHaveBeenCalled();
    expect(httpClient.delete).toHaveBeenCalledWith(REST_API + '/' + mockBookmark.id);
  }));

  it('should show array of bookmark ', fakeAsync(() => {
    // test data prepare
    const mockBookmark = {
      id: '123',
      name: 'travel tour',
      url: 'travel.com',
      group: 'travel',
    };
    component.filteredBookmarks = [mockBookmark, mockBookmark];
    fixture.detectChanges();

    const deleteButtons = fixture.nativeElement.querySelectorAll('button');

    // total no of records on Tables must match with Array of data
    expect(deleteButtons.length).toEqual(component.filteredBookmarks.length);
  }));
});
