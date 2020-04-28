import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

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
  orderUrl = 'https://alphasmartback.herokuapp.com/api/order/';
  existingOrder = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchOrders();
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

  onSubmitHandler(e) {
    e.preventDefault();
    const ticker = this.ticker;
    const orderType = this.orderType;
    const orderPrice = this.orderPrice.length === 0 ? null : this.orderPrice;
    const orderVolumn = this.orderVolumn;
    const orderData = {
      order: {
        ticker,
        order_type: orderType,
        order_price: orderPrice,
        order_volumn: orderVolumn,
      }
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': 'my-auth-token'
      })
    };
    this.http.post(this.orderUrl, orderData, httpOptions).subscribe({
      next: order => {
        this.fetchOrders();
      },
      error: error => console.error('There was an error!', error)
    });
  }

  fetchOrders() {
    this.http.get(this.orderUrl).pipe(map(res => {
      const orderArray = [];
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          orderArray.push({...res[key]});
        }
      }
      return orderArray;
    }))
      .subscribe(orders => {
          const rawOrders = Object.values(orders[0]);
          this.existingOrder = rawOrders.sort((a, b) => {
            // @ts-ignore
            return (a.id > b.id) ? -1 : 1;
          });
        }
      );
  }

}