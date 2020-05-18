import {TestBed} from '@angular/core/testing';

import {TopNewsService} from './top-news.service';

describe('TopNewsService', () => {
  let service: TopNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopNewsService);
  });
});
