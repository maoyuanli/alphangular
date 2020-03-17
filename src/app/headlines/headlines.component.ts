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
    // console.log(this.fetchedArticles);
  }

  onFetchHeadlines() {
    this.fetchHeadlines();
  }

  private fetchHeadlines() {
    this.http.get('https://alphasmartback.herokuapp.com/api/homepage/')
      .subscribe(articles => {
          console.log(articles);
          console.log(typeof articles);
        }
      )
    ;
  }

}
