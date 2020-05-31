import {Injectable} from '@angular/core';
import * as AFINN from 'sentiment';
import {map, pluck} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private backendUrlPrefix = environment.springUrlPrefix;
  sentiment = new AFINN();

  constructor(private http: HttpClient) {
  }

  getFullUrl(backendType: string, endpoint: string) {
    switch (backendType) {
      case 'spring':
        return environment.springUrlPrefix + endpoint + '/';
      case 'node':
        return environment.nodeUrlPrefix + endpoint + '/';
    }
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
