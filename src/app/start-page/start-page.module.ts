import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StartPageRoutingModule} from './start-page-routing.module';
import {HomepageComponent} from './homepage/homepage.component';
import {StockindexComponent} from './stockindex/stockindex.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [HomepageComponent, StockindexComponent],
  imports: [
    CommonModule,
    StartPageRoutingModule,
    SharedModule
  ],
  exports: [
    HomepageComponent,
    StockindexComponent
  ]
})
export class StartPageModule {
}
