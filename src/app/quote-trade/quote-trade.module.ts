import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QuoteTradeRoutingModule} from './quote-trade-routing.module';
import {QuotepageComponent} from './quotepage/quotepage.component';
import {QuotecardComponent} from './quotecard/quotecard.component';
import {TradeorderComponent} from './tradeorder/tradeorder.component';
import {QuoteAndTradePageComponent} from './quote-and-trade-page/quote-and-trade-page.component';
import {GoogleChartsModule} from 'angular-google-charts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../services/auth-service/auth.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [QuotepageComponent, QuotecardComponent, TradeorderComponent, QuoteAndTradePageComponent],
  imports: [
    CommonModule,
    QuoteTradeRoutingModule,
    GoogleChartsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
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
