import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QuoteTradeRoutingModule} from './quote-trade-routing.module';
import {QuotepageComponent} from './quotepage/quotepage.component';
import {QuotecardComponent} from './quotecard/quotecard.component';
import {TradeorderComponent} from './tradeorder/tradeorder.component';
import { QuoteAndTradePageComponent } from './quote-and-trade-page/quote-and-trade-page.component';
import {GoogleChartsModule} from 'angular-google-charts';

@NgModule({
  declarations: [QuotepageComponent, QuotecardComponent, TradeorderComponent, QuoteAndTradePageComponent],
    imports: [
        CommonModule,
        QuoteTradeRoutingModule,
        GoogleChartsModule,
    ],
  exports: [
    QuotepageComponent,
    QuotecardComponent,
    TradeorderComponent
  ]
})
export class QuoteTradeModule {
}
