import {TestBed} from '@angular/core/testing';

import {SearchNewsApiService} from './search-news-api.service';

describe('SearchNewsApiService', () => {
  let service: SearchNewsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchNewsApiService);
  });
});
