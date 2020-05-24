import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StartPageRoutingModule} from './start-page-routing.module';
import {HomepageComponent} from './homepage/homepage.component';
import {StockindexComponent} from './stockindex/stockindex.component';
import {SharedModule} from '../shared/shared.module';
import {CarouselComponent} from './carousel/carousel.component';
import {CarouselModule, WavesModule} from 'angular-bootstrap-md';
import { Covid19Component } from '../covid19/covid19.component';

@NgModule({
  declarations: [HomepageComponent, StockindexComponent, CarouselComponent],
  imports: [
    CommonModule,
    StartPageRoutingModule,
    SharedModule,
    CarouselModule,
    WavesModule
  ],
  exports: [
    HomepageComponent,
    StockindexComponent
  ]
})
export class StartPageModule {
}
