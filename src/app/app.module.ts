import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {TestComp1Component} from './test-comp1/test-comp1.component';
import {TestCardsComponent} from './test-cards/test-cards.component';
import {TestCardholderComponent} from './test-cardholder/test-cardholder.component';
import {SearchnewsComponent} from './searchnews/searchnews.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {QuoteTradeModule} from './quote-trade/quote-trade.module';
import {StartPageModule} from './start-page/start-page.module';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComp1Component,
    TestCardsComponent,
    TestCardholderComponent,
    SearchnewsComponent,
    FeedbackComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    QuoteTradeModule,
    StartPageModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
