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
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {TweetsComponent} from './tweets/tweets.component';
import {AuthService} from './services/auth-service/auth.service';
import {SharedModule} from './shared/shared.module';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {Covid19Component} from './covid19/covid19.component';
import {GoogleChartsModule} from 'angular-google-charts';
import {ChatbotComponent} from './chatbot/chatbot.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchnewsComponent,
    FeedbackComponent,
    PagenotfoundComponent,
    TweetsComponent,
    Covid19Component,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    QuoteTradeModule,
    StartPageModule,
    AppRoutingModule,
    SharedModule,
    MDBBootstrapModule.forRoot(),
    GoogleChartsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
