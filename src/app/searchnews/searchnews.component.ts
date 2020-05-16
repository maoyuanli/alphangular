import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilsService} from '../services/utils-service/utils.service';
import {SearchWikiService} from '../services/search-wiki-service/search-wiki.service';

@Component({
  selector: 'app-searchnews',
  templateUrl: './searchnews.component.html',
  styleUrls: ['./searchnews.component.css']
})
export class SearchnewsComponent implements OnInit {

  keyword = '';
  newsArticles = [];
  wikiArticles = [];
  openedWikiArticle = 0;

  constructor(private http: HttpClient,
              private utilsService: UtilsService,
              private searchWikiService: SearchWikiService) {
  }

  ngOnInit(): void {
  }

  onClickSearchDirect() {
    this.searchWikiService.search(this.keyword).subscribe((res: any) => {
      this.wikiArticles = res.query.search;
    });

    const searchURI = `https://newsapi.org/v2/everything?q=${encodeURI(this.keyword)}&apiKey=0cd11b45ffd949eaa03bbdbd23c5f95f`;
    this.http.get(searchURI).subscribe(res => {
      const data = Object.values(res);
      const articles = data[2];
      const articlesWithSent = [];
      articles.forEach(article => {
        articlesWithSent.push({...article, sentiment: this.utilsService.getSentiment(article.title)});
      });
      this.newsArticles = articlesWithSent;
    });
  }

  clearResult(event) {
    this.keyword = '';
    this.newsArticles = [];
    event.preventDefault();
  }

  onClickWikiArticle(index: number) {
    if (index === this.openedWikiArticle) {
      this.openedWikiArticle = -1;
    } else {
      this.openedWikiArticle = index
    }

  }
}
