import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilsService} from '../services/utils-service/utils.service';
import {SearchWikiService} from '../services/search-wiki-service/search-wiki.service';
import {SearchNewsApiService} from '../services/search-newsapi-service/search-news-api.service';

@Component({
  selector: 'app-searchnews',
  templateUrl: './searchnews.component.html',
  styleUrls: ['./searchnews.component.css']
})
export class SearchnewsComponent implements OnInit {

  keyword = 'covid19';
  newsArticles = [];
  wikiArticles = [];
  openedWikiArticle = 0;
  showWiki = false;

  constructor(private http: HttpClient,
              private utilsService: UtilsService,
              private searchWikiService: SearchWikiService,
              private searchNewsApiService: SearchNewsApiService) {
  }

  ngOnInit(): void {
  }

  onClickSearchDirect() {
    this.searchWikiService.search(this.keyword).subscribe((articles) => {
      this.wikiArticles = articles;
    });

    this.searchNewsApiService.search(this.keyword).subscribe(articles => {
      this.newsArticles = articles;
    });
  }

  clearResult(event) {
    this.keyword = '';
    this.newsArticles = [];
    this.wikiArticles = [];
    this.showWiki = false;
    event.preventDefault();
  }

  onClickWikiArticle(index: number) {
    if (index === this.openedWikiArticle) {
      this.openedWikiArticle = -1;
    } else {
      this.openedWikiArticle = index;
    }

  }
}
