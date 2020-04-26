import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  fetchedArticles = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.onFetchHeadlines();

  }

  onFetchHeadlines() {
    this.fetchHeadlines();
  }

  private fetchHeadlines() {
    this.http.get('https://alphasmartback.herokuapp.com/api/homepage/')
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
