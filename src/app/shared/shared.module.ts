import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedRoutingModule} from './shared-routing.module';
import {HeadlinesComponent} from './headlines/headlines.component';
import {FormatPhoneNoPipe} from './pipes/format-phone-no.pipe';


@NgModule({
  declarations: [
    HeadlinesComponent,
    FormatPhoneNoPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    HeadlinesComponent,
    FormatPhoneNoPipe
  ]
})
export class SharedModule {
}
