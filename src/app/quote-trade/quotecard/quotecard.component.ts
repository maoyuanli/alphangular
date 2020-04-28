import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-quotecard',
  templateUrl: './quotecard.component.html',
  styleUrls: ['./quotecard.component.css']
})
export class QuotecardComponent implements OnInit {

  @Input() name = '';
  @Input() newestAvailableDate = '';
  @Input() price = '';
  @Input() volume = '';
  @Input() data = [];

  extractedData = [];
  type = 'LineChart';
  options = {
    width: 290,
    height: 180,
    lineWidth: 3,
    vAxis: {
      title: 'Price',
    },
    hAxis: {
      title: '1 month movement',
      textPosition: 'none',
    },
    legend: 'none'
  };

  constructor() {
  }

  ngOnInit(): void {
    this.extractTradeDataRange();
  }

  extractTradeDataRange() {
    const extracted = this.data.slice(0, 30);
    const rslt = [];
    for (let i = extracted.length - 1; i >= 0; i--) {
      rslt.push([extracted[i][0], extracted[i][4]]);
    }
    this.extractedData = rslt;
  }


}
