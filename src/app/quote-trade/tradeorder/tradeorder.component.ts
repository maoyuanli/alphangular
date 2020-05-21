import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {pluck} from 'rxjs/operators';
import {UtilsService} from '../../services/utils-service/utils.service';

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
  existingOrder = [];
  token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.token
    })
  };

  constructor(private http: HttpClient, private utilsService: UtilsService) {
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


    this.http.post(this.utilsService.getFullUrl('setorder'), orderData, this.httpOptions).subscribe({
      next: order => {
        this.fetchOrders();
      },
      error: error => console.error('There was an error!', error)
    });
  }

  fetchOrders() {
    this.http.get<Orders>(this.utilsService.getFullUrl('getorder'), this.httpOptions)
      .pipe(pluck('orders'))
      .subscribe(orders => {
          this.existingOrder = orders.sort((a, b) => {
            return (a.id > b.id) ? -1 : 1;
          });
        }
      );
  }

  logout() {
    localStorage.removeItem('token');
  }
}

export interface Orders {
  orders: {
    id: number;
    ticker: string;
    orderType: string;
    orderVolumn: string;
    createdDate: string;
  }[];
}
