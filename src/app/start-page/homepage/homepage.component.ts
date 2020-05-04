import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {sentiment} from './sentilyzer.js';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  fetchedArticles = [];
  fetchedArticlesAvgSent = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.onFetchHeadlines();

  }

  onFetchHeadlines() {
    // this.fetchHeadlines();
    this.fetchHeadlinesDirect();
  }

  private fetchHeadlinesDirect() {

    const directUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=0cd11b45ffd949eaa03bbdbd23c5f95f';
    this.http
      .get(directUrl).subscribe(res => {
      const data = Object.values(res);
      const articles = data[2];
      const articlesWithSent = [];
      articles.forEach(article => {
        articlesWithSent.push({...article, sentiment: sentiment.analyze(article.title).score});
      });
      let sentiSum = 0;
      articlesWithSent.forEach(a => {
        sentiSum += a.sentiment;
      });
      this.fetchedArticlesAvgSent = sentiSum / articlesWithSent.length;
      this.fetchedArticles = articlesWithSent;
    });
  }

  // private fetchHeadlines() {
  //   this.http.get('https://alphasmartback.herokuapp.com/api/homepage/')
  //     .pipe(map(res => {
  //       const articlesArray = [];
  //       for (const key in res) {
  //         if (res.hasOwnProperty(key)) {
  //           articlesArray.push({...res[key]});
  //         }
  //       }
  //       return articlesArray;
  //     }))
  //     .subscribe(articles => {
  //         this.fetchedArticles = Object.values(articles[0]);
  //       }
  //     )
  //   ;
  // }

}
