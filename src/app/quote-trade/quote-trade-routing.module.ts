import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuoteAndTradePageComponent} from './quote-and-trade-page/quote-and-trade-page.component';


const routes: Routes = [
  {path: 'trade', component: QuoteAndTradePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteTradeRoutingModule {
}
