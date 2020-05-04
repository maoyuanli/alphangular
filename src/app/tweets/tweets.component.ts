import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {UtilsService} from '../shared/utils.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  tweets = [];

  constructor(private http: HttpClient, private utilsService: UtilsService) {
  }

  ngOnInit(): void {
    this.fetchTweets();
  }

  fetchTweets() {
    this.http.get(this.utilsService.getFullUrl('tweet')).pipe(map(res => {
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
