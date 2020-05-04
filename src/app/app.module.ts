import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {SearchnewsComponent} from './searchnews/searchnews.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {QuoteTradeModule} from './quote-trade/quote-trade.module';
import {StartPageModule} from './start-page/start-page.module';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {TweetsComponent} from './tweets/tweets.component';
import {FormatPhoneNoPipe} from './format-phone-no.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchnewsComponent,
    FeedbackComponent,
    PagenotfoundComponent,
    TweetsComponent,
    FormatPhoneNoPipe,
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
