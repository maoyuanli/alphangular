import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilsService} from '../../services/utils-service/utils.service';
import {TopNewsService} from '../../services/top-news-service/top-news.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  fetchedArticles = [];
  fetchedArticlesAvgSent = 0;
  imageStories = [];

  constructor(private http: HttpClient,
              private utilsService: UtilsService,
              private topNewsService: TopNewsService) {
  }

  ngOnInit(): void {
    this.onFetchHeadlines();
  }

  onFetchHeadlines() {
    this.fetchHeadlinesDirect();
  }

  private fetchHeadlinesDirect() {
    this.topNewsService.fetchTopNews().subscribe(articlesWithSent => {
      let sentiSum = 0;
      articlesWithSent.forEach(a => {
        sentiSum += a.sentiment;
      });
      this.fetchedArticlesAvgSent = sentiSum / articlesWithSent.length;
      this.fetchedArticles = articlesWithSent;
      this.imageStories = articlesWithSent.filter(article => article.urlToImage !== null);
    });
  }


}
