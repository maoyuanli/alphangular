import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {sentiment} from '../start-page/homepage/sentilyzer';

@Component({
  selector: 'app-searchnews',
  templateUrl: './searchnews.component.html',
  styleUrls: ['./searchnews.component.css']
})
export class SearchnewsComponent implements OnInit {

  keyword = '';
  fetchedArticles = [];

  constructor(private http: HttpClient) {
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
        articlesWithSent.push({...article, sentiment: sentiment.analyze(article.title).score});
      });
      this.fetchedArticles = articlesWithSent;
    });
  }

  // onClickSearch() {
  //   const searchURI = 'https://alphasmartback.herokuapp.com/api/searchnews/?q=' + encodeURI(this.keyword);
  //   this.http.get(searchURI)
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

  clearResult(event) {
    this.keyword = '';
    this.fetchedArticles = [];
    event.preventDefault();
  }
}
