import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilsService} from '../utils-service/utils.service';


@Injectable({
  providedIn: 'root'
})
export class SearchNewsApiService {

  prefix = 'https://newsapi.org/v2/everything?q=';
  apiKey = '&apiKey=0cd11b45ffd949eaa03bbdbd23c5f95f';

  constructor(private http: HttpClient,
              private utilsService: UtilsService,
  ) {
  }

  search(keyword: string) {
    return this.utilsService.getNewsArticlesWithSentScore(this.prefix + keyword + this.apiKey);
  }
}
