import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilsService} from '../utils-service/utils.service';


@Injectable({
  providedIn: 'root'
})
export class SearchNewsApiService {

  constructor(private http: HttpClient,
              private utilsService: UtilsService,
  ) {
  }

  search(keyword: string) {
    const endpoint = this.utilsService.getFullUrl('searchnews');
    const searchUrl = endpoint.slice(0, endpoint.length - 1) + `?q=${keyword}`;
    return this.utilsService.getNewsArticlesWithSentScore(searchUrl);
  }
}
