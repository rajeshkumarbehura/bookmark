import { TestBed } from '@angular/core/testing';

import { BookmarkService } from './bookmark.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('BookmarkService', () => {
  let httpClient: HttpClient;
  let service: BookmarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.get(BookmarkService);
    httpClient = TestBed.get(HttpClient);
  });

  it('should be created', async () => {
    spyOn(httpClient, 'post').and.callThrough();
    await service.createBookmark(null);
    expect(service).toBeTruthy();
    expect(httpClient.post).toHaveBeenCalled();
  });

  it('should be deleted', async () => {
    spyOn(httpClient, 'delete').and.callThrough();
    await service.deleteBookmark('12');
    expect(service).toBeTruthy();
    expect(httpClient.delete).toHaveBeenCalled();
  });

  it('should be fetched', async () => {
    spyOn(httpClient, 'get').and.callThrough();
    await service.getBookmarks();
    expect(service).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  });
});
