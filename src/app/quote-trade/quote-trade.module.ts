import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QuoteTradeRoutingModule} from './quote-trade-routing.module';
import {QuotepageComponent} from './quotepage/quotepage.component';
import {QuotecardComponent} from './quotecard/quotecard.component';
import {TradeorderComponent} from './tradeorder/tradeorder.component';
import {QuoteAndTradePageComponent} from './quote-and-trade-page/quote-and-trade-page.component';
import {GoogleChartsModule} from 'angular-google-charts';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../shared/auth.service';

@NgModule({
  declarations: [QuotepageComponent, QuotecardComponent, TradeorderComponent, QuoteAndTradePageComponent],
  imports: [
    CommonModule,
    QuoteTradeRoutingModule,
    GoogleChartsModule,
    FormsModule
  ],
  exports: [
    QuotepageComponent,
    QuotecardComponent,
    TradeorderComponent
  ],
  providers: [
    AuthService
  ]
})
export class QuoteTradeModule {
}
