import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilsService} from '../shared/utils.service';

@Component({
  selector: 'app-searchnews',
  templateUrl: './searchnews.component.html',
  styleUrls: ['./searchnews.component.css']
})
export class SearchnewsComponent implements OnInit {

  keyword = '';
  fetchedArticles = [];

  constructor(private http: HttpClient, private utilsService: UtilsService) {
  }

  ngOnInit(): void {
  }

  onChangeKeyword(typed: string) {
    this.keyword = typed;
  }

  onClickSearchDirect() {
    const searchURI = `https://newsapi.org/v2/everything?q=${encodeURI(this.keyword)}&apiKey=0cd11b45ffd949eaa03bbdbd23c5f95f`;
    this.http.get(searchURI).subscribe(res => {
      const data = Object.values(res);
      const articles = data[2];
      const articlesWithSent = [];
      articles.forEach(article => {
        articlesWithSent.push({...article, sentiment: this.utilsService.getSentiment(article.title)});
      });
      this.fetchedArticles = articlesWithSent;
    });
  }

  clearResult(event) {
    this.keyword = '';
    this.fetchedArticles = [];
    event.preventDefault();
  }
}
