import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  tweets = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchTweets();
  }

  fetchTweets() {
    const url = 'https://alphasmartback.herokuapp.com/api/tweet/';
    this.http.get(url).pipe(map(res => {
      const resArray = [];
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          resArray.push({...res[key]});
        }
      }
      return resArray;
    }))
      .subscribe(results => {
          this.tweets = Object.values(results[0]).slice(0, 30);
        }
      );
  }
}
