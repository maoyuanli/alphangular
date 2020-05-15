import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {UtilsService} from '../../shared/utils.service';

@Component({
  selector: 'app-quotepage',
  templateUrl: './quotepage.component.html',
  styleUrls: ['./quotepage.component.css']
})
export class QuotepageComponent implements OnInit {

  quotes = [];
  currentPage = 0;


  constructor(private http: HttpClient, private utilsService: UtilsService) {
  }

  ngOnInit(): void {
    this.fetchQuotes();
  }

  fetchQuotes() {
    this.http.get(this.utilsService.getFullUrl('quote')).pipe(map(res => {
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
