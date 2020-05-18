import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilsService} from '../utils-service/utils.service';

@Injectable({
  providedIn: 'root'
})
export class TopNewsService {

  directUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0cd11b45ffd949eaa03bbdbd23c5f95f';

  constructor(private http: HttpClient,
              private utilsService: UtilsService) {
  }

  fetchTopNews() {
    return this.utilsService.getNewsArticlesWithSentScore(this.directUrl);
  }
}
