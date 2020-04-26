import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { TestComp1Component } from './test-comp1/test-comp1.component';
import { TestCardsComponent } from './test-cards/test-cards.component';
import { TestCardholderComponent } from './test-cardholder/test-cardholder.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchnewsComponent } from './searchnews/searchnews.component';
import { QuotecardComponent } from './quotecard/quotecard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadlinesComponent,
    TestComp1Component,
    TestCardsComponent,
    TestCardholderComponent,
    HomepageComponent,
    SearchnewsComponent,
    QuotecardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
