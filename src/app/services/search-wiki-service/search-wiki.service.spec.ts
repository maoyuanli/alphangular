import { TestBed } from '@angular/core/testing';

import { SearchWikiService } from './search-wiki.service';

describe('SearchWikiService', () => {
  let service: SearchWikiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchWikiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
