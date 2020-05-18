import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {pluck} from 'rxjs/operators';

interface WikiResponse {
  query: {
    search: {
      title: string;
      snippet: string;
    }[]
  };
}

@Injectable({
  providedIn: 'root'
})
export class SearchWikiService {
  urlPrefix = 'https://en.wikipedia.org/w/api.php';

  constructor(private http: HttpClient) {
  }

  search(keyword: string) {
    return this.http.get<WikiResponse>(this.urlPrefix, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: keyword,
        origin: '*'
      }
    }).pipe(
      pluck('query', 'search')
    );
  }
}
