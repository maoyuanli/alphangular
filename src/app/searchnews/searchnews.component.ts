import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

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

  onClickSearch() {
    const searchURI = 'https://alphasmartback.herokuapp.com/api/searchnews/?q=' + encodeURI(this.keyword);
    this.http.get(searchURI)
      .pipe(map(res => {
        const articlesArray = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            articlesArray.push({...res[key]});
          }
        }
        return articlesArray;
      }))
      .subscribe(articles => {
          this.fetchedArticles = Object.values(articles[0]);
        }
      )
    ;
  }
}
