import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FeedbackComponent} from './feedback/feedback.component';
import {SearchnewsComponent} from './searchnews/searchnews.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {QuoteAndTradePageComponent} from './quote-trade/quote-and-trade-page/quote-and-trade-page.component';
import {ChatbotComponent} from './chatbot/chatbot.component';
import {HomepageComponent} from './start-page/homepage/homepage.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'search', component: SearchnewsComponent},
  {path: 'trade', component: QuoteAndTradePageComponent},
  {path: 'chatbot', component: ChatbotComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
