import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit {
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
            articlesArray.push({...res[key], id: key});
          }
        }
        // console.log(articlesArray);
        return articlesArray;
      }))
      .subscribe(articles => {
          this.fetchedArticles = articles;
          console.log(this.fetchedArticles);
          console.log(typeof this.fetchedArticles);
        }
      )
    ;
    // console.log(this.fetchedArticles);
  }

}
