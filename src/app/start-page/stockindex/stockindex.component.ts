import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-stockindex',
  templateUrl: './stockindex.component.html',
  styleUrls: ['./stockindex.component.css']
})
export class StockindexComponent implements OnInit {

  stockIndexUrl = 'https://www.quandl.com/api/v3/datasets/NASDAQOMX/XQC.json?api_key=f_tQibQDxz8s2CABjKZU';
  indexData: any = '';
  shouldGoUp = true;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    // this.fetchStockIndex();
    this.fetchStockIndexDirect();
  }

  fetchStockIndexDirect() {
    this.http.get(this.stockIndexUrl).subscribe(
      res => {
        const data = Object.values(res)[0].data;
        const latest = data[0];
        let benchmark;
        for (let i = 1; i < data.length; i++) {
          if (this.shouldGoUp && data[i][1] < latest[1] || !this.shouldGoUp && data[i][1] > latest[1]) {
            benchmark = data[i];
            break;
          }
        }
        this.indexData = {
          latest_date: latest[0],
          latest_val: latest[1],
          benchmark_date: benchmark[0],
          benchmark_val: benchmark[1],
          change: latest[1] / benchmark[1] - 1
      }
        ;
      }
    );
  }

  // fetchStockIndex() {
  //   this.http.get(this.stockIndexUrl)
  //     .pipe(map((res: Response) => {
  //       return Object.values(res);
  //     }))
  //     .subscribe(market => {
  //         this.indexData = market[0];
  //       }
  //     )
  //   ;
  // }
}
