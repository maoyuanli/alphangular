import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-stockindex',
  templateUrl: './stockindex.component.html',
  styleUrls: ['./stockindex.component.css']
})
export class StockindexComponent implements OnInit {

  stockIndexUrl = 'https://alphasmartback.herokuapp.com/api/stockmarket/';
  indexData: any = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchStockIndex();
  }

  fetchStockIndex() {
    this.http.get(this.stockIndexUrl)
      .pipe(map((res: Response) => {
        return Object.values(res);
      }))
      .subscribe(market => {
          this.indexData = market[0];
        }
      )
    ;
  }
}
