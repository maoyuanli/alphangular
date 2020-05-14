import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-stockindex',
  templateUrl: './stockindex.component.html',
  styleUrls: ['./stockindex.component.css']
})
export class StockindexComponent implements OnInit {

  stockIndexUrl = 'https://www.quandl.com/api/v3/datasets/NASDAQOMX/XQC.json?api_key=f_tQibQDxz8s2CABjKZU';
  indexData: any = '';
  @Input() avgSentScore = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchStockIndexDirect();
  }

  createDateRangeString(daysAgo: number) {
    const today = Date.now();
    const start = new Date(today - (daysAgo * 24 * 60 * 60 * 1000));
    const end = new Date(today);
    const formattedEnd = end.toISOString().split('T')[0];
    const formattedStart = start.toISOString().split('T')[0];
    return `&start_date=${formattedStart}&end_date=${formattedEnd}`;
  }

  fetchStockIndexDirect() {
    this.http.get(this.stockIndexUrl + this.createDateRangeString(180)).subscribe(
      res => {
        const data = Object.values(res)[0].data;
        let startIndex = 0;
        while (data[startIndex][1] === 0) {
          startIndex++;
        }
        const latest = data[startIndex];
        let benchmark;
        for (let i = startIndex + 1; i < data.length; i++) {
          if (this.avgSentScore >= 0 && data[i][1] < latest[1] || this.avgSentScore < 0 && data[i][1] > latest[1]) {
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

}
