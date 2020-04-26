import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tradeorder',
  templateUrl: './tradeorder.component.html',
  styleUrls: ['./tradeorder.component.css']
})
export class TradeorderComponent implements OnInit {

  ticker = '';
  orderType = '';
  orderPrice = '';
  orderVolumn = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onChangeTicker(ticker: string) {
    this.ticker = ticker;
  }

  onChangeType(type: string) {
    this.orderType = type;
  }

  onChangePrice(price: string) {
    this.orderPrice = price;
  }

  onChangeVolumn(volumn: string) {
    this.orderVolumn = volumn;
  }
}
