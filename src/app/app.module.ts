import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {HeadlinesComponent} from './start-page/headlines/headlines.component';
import {TestComp1Component} from './test-comp1/test-comp1.component';
import {TestCardsComponent} from './test-cards/test-cards.component';
import {TestCardholderComponent} from './test-cardholder/test-cardholder.component';
import {HomepageComponent} from './start-page/homepage/homepage.component';
import {SearchnewsComponent} from './searchnews/searchnews.component';
import {QuotecardComponent} from './quote-trade/quotecard/quotecard.component';
import {QuotepageComponent} from './quote-trade/quotepage/quotepage.component';
import {TradeorderComponent} from './quote-trade/tradeorder/tradeorder.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {StockindexComponent} from './start-page/stockindex/stockindex.component';
import {QuoteTradeModule} from './quote-trade/quote-trade.module';
import {StartPageModule} from './start-page/start-page.module';


@NgModule({
  declarations: [
    AppComponent,
    // HeadlinesComponent,
    TestComp1Component,
    TestCardsComponent,
    TestCardholderComponent,
    // HomepageComponent,
    SearchnewsComponent,
    // QuotecardComponent,
    // QuotepageComponent,
    // TradeorderComponent,
    FeedbackComponent,
    // StockindexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    QuoteTradeModule,
    StartPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
