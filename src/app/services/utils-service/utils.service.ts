import {Injectable} from '@angular/core';
import * as AFINN from 'sentiment';
import {map, pluck} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private devUrlPrefix = 'http://localhost:5000/api/';
  private prodUrlPrefix = 'https://alphaspring.herokuapp.com/api/';
  private backendUrlPrefix = this.prodUrlPrefix;
  sentiment = new AFINN();

  constructor(private http: HttpClient,) {
  }

  getFullUrl(endpoint: string) {
    return this.backendUrlPrefix + endpoint + '/';
  }

  getSentiment(str: string) {
    return this.sentiment.analyze(str).score;
  }

  getNewsArticlesWithSentScore(url: string) {
    return this.http.get<NewsApiResponse>(url)
      .pipe(
        pluck('articles'),
        map(
          articles => articles.map(article =>
            ({...article, sentiment: this.getSentiment(article.title)}))
        )
      );
  }
}

export interface NewsApiResponse {
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
