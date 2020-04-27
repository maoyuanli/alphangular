import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartPageRoutingModule } from './start-page-routing.module';
import { HomepageComponent} from './homepage/homepage.component';
import {HeadlinesComponent} from './headlines/headlines.component';
import {StockindexComponent} from './stockindex/stockindex.component';

@NgModule({
  declarations: [HomepageComponent , HeadlinesComponent, StockindexComponent],
  imports: [
    CommonModule,
    StartPageRoutingModule
  ],
  exports: [
    HomepageComponent,
    HeadlinesComponent,
    StockindexComponent
  ]
})
export class StartPageModule { }
