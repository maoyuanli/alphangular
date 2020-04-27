import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QuoteTradeRoutingModule} from './quote-trade-routing.module';
import {QuotepageComponent} from './quotepage/quotepage.component';
import {QuotecardComponent} from './quotecard/quotecard.component';
import {TradeorderComponent} from './tradeorder/tradeorder.component';

@NgModule({
  declarations: [QuotepageComponent, QuotecardComponent, TradeorderComponent],
  imports: [
    CommonModule,
    QuoteTradeRoutingModule,
  ],
  exports: [
    QuotepageComponent,
    QuotecardComponent,
    TradeorderComponent
  ]
})
export class QuoteTradeModule {
}
