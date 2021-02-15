import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AddBookmarkComponent } from './add-bookmark.component';
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
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatOptionModule } from '@angular/material/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { routes } from '../app-routing.module';
import { HomeComponent } from '../home/home.component';
import { Store, StoreModule } from '@ngrx/store';
import * as fromBm from '../store/bookmark.reducer';
import { reducers } from '../reducers';
import { EffectsModule } from '@ngrx/effects';
import { BookmarkEffects } from '../store/bookmark.effects';
import { BookmarkService } from '../service/bookmark.service';
import { HttpClient } from '@angular/common/http';
import { REST_API } from '../shared/constant';

describe('AddBookmarkComponent', () => {
  let addBookmarkComponent: AddBookmarkComponent;
  let fixture: ComponentFixture<AddBookmarkComponent>;
  let location: Location;
  let router: Router;
  let store: MockStore<fromBm.State>;
  let bookmarkService: BookmarkService;
  let httpClient: HttpClient;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        MatSidenavModule,
        RouterTestingModule.withRoutes(routes),
        MatToolbarModule,
        MatCardModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatRadioModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot({ ...reducers }),
        EffectsModule.forRoot([BookmarkEffects]),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [HomeComponent, AddBookmarkComponent],
      providers: [BookmarkService],
    }).compileComponents();

    bookmarkService = TestBed.get(BookmarkService);
    httpClient = TestBed.get(HttpClient);
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    store = TestBed.get(Store);

    fixture = TestBed.createComponent(AddBookmarkComponent);
    router.initialNavigation();
    addBookmarkComponent = fixture.componentInstance;

    fixture.detectChanges();

    // spying on methods
    spyOn(httpClient, 'post').and.callThrough();
    spyOn(bookmarkService, 'createBookmark').and.callThrough();

    tick();
  }));

  /**
   *  It process the from frontend till http post method is called. Pass thru all stages like Action,State,Service
   *  This case makes sure that, when an action is trigger on Frontend button, it goes thru all steps and call Http Post method
   */
  it(`Should have called http Post method with valid data`, fakeAsync(() => {
    fixture.ngZone.run(() => {});

    const mockBookmark = {
      id: '',
      name: 'travel story',
      url: 'www.travel.com',
      group: 'travel',
    };
    // set the for component fields
    addBookmarkComponent.bookmarkName.patchValue(mockBookmark.name);
    addBookmarkComponent.bookmarkUrl.patchValue(mockBookmark.url);
    addBookmarkComponent.bookmarkGroup.patchValue(mockBookmark.group);

    // trigger the Event/operation
    addBookmarkComponent.createBookmark();
    tick();

    // validate that bookmarkService method is called as expected with valid data
    expect(bookmarkService.createBookmark).toHaveBeenCalled();
    expect(bookmarkService.createBookmark).toHaveBeenCalledWith(mockBookmark);

    // validate that http post method is called as expected with valid data
    expect(httpClient.post).toHaveBeenCalled();
    expect(httpClient.post).toHaveBeenCalledWith(REST_API, mockBookmark);

    expect(location.path()).toBe('/');
  }));
});
