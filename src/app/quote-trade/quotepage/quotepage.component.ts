import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-quotepage',
  templateUrl: './quotepage.component.html',
  styleUrls: ['./quotepage.component.css']
})
export class QuotepageComponent implements OnInit {

  quotes = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchQuotes();
  }

  fetchQuotes() {
    const quoteUrl = 'https://alphasmartback.herokuapp.com/api/quote/';
    this.http.get(quoteUrl).pipe(map(res => {
      const quotesArray = [];
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          quotesArray.push({...res[key]});
        }
      }
      return quotesArray;
    }))
      .subscribe(quotes => {
          this.quotes = Object.values(quotes[0]);
        }
      );
  }
}
