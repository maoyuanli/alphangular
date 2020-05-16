import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchWikiService {
  urlPrefix = 'https://en.wikipedia.org/w/api.php';

  constructor(private http: HttpClient) {
  }

  search(keyword: string) {
    return this.http.get(this.urlPrefix, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: keyword,
        origin: '*'
      }
    });
  }
}
