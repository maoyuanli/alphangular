import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilsService} from '../../shared/services/utils-service/utils.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  fetchedArticles = [];
  fetchedArticlesAvgSent = 0;

  constructor(private http: HttpClient, private utilsService: UtilsService) {
  }

  ngOnInit(): void {
    this.onFetchHeadlines();

  }

  onFetchHeadlines() {
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
        articlesWithSent.push({...article, sentiment: this.utilsService.getSentiment(article.title)});
      });
      let sentiSum = 0;
      articlesWithSent.forEach(a => {
        sentiSum += a.sentiment;
      });
      this.fetchedArticlesAvgSent = sentiSum / articlesWithSent.length;
      this.fetchedArticles = articlesWithSent;
    });
  }

}
