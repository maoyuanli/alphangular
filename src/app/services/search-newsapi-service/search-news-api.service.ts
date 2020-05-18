import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, pluck} from 'rxjs/operators';
import {UtilsService} from '../utils-service/utils.service';

interface NewsApiResponse {
  articles: {
    source: {
      name: string
    };
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }[];
}

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
    return this.http.get<NewsApiResponse>(this.prefix + keyword + this.apiKey)
      .pipe(
        pluck('articles'),
        map(articles => {
          const articlesWithSent = [];
          articles.forEach(article => {
            articlesWithSent.push({...article, sentiment: this.utilsService.getSentiment(article.title)});
          });
          return articlesWithSent;
        })
      );
  }
}
