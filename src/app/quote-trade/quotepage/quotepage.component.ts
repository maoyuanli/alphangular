import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {UtilsService} from '../../services/utils-service/utils.service';

@Component({
  selector: 'app-quotepage',
  templateUrl: './quotepage.component.html',
  styleUrls: ['./quotepage.component.css']
})
export class QuotepageComponent implements OnInit {

  quotes = [];
  currentPage = 1;
  showDailyTips = true;
  loading = true;

  constructor(private http: HttpClient, private utilsService: UtilsService) {
  }

  ngOnInit(): void {
    this.fetchQuotes();
  }

  fetchQuotes() {
    this.http.get(this.utilsService.getFullUrl('node', 'quote')).pipe(map(res => {
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
          this.loading = false;
        }
      );
  }

  clearDailyTip() {
    this.showDailyTips = false;
  }

}
