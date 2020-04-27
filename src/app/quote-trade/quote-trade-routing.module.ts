import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TradeorderComponent} from './tradeorder/tradeorder.component';


const routes: Routes = [
  {path: 'trade', component: TradeorderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteTradeRoutingModule {
}
